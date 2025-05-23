import { useEffect } from 'react';
import * as THREE from 'three';
import chroma from 'chroma-js';

export default function AnimatedBackground() {
  useEffect(() => {
    const conf = {
      nx: 40,
      ny: 100,
      cscale: chroma.scale(['#2e003e', '#4B0082', '#663399']).mode('lch'),
      darken: -1,
      angle: Math.PI / 3,
      timeCoef: 0.1
    };

    let renderer, scene, camera;
    const { randFloat: rnd } = THREE.MathUtils;
    const uTime = { value: 0 }, uTimeCoef = { value: conf.timeCoef };
    const polylines = [];

    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    camera = new THREE.PerspectiveCamera();
    updateSize();
    window.addEventListener('resize', updateSize);

    initScene();
    requestAnimationFrame(animate);

    function updateSize() {
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function initScene() {
      scene = new THREE.Scene();
      const vertexShader = `...`; // está simplificado abaixo
      const fragmentShader = `...`;

      const dx = 2 / conf.nx, dy = -2 / (conf.ny - 1);
      const ox = -1 + dx / 2, oy = 1;
      const mat2 = new Float32Array([
        Math.cos(conf.angle), -Math.sin(conf.angle),
        Math.sin(conf.angle), Math.cos(conf.angle)
      ]);

      for (let i = 0; i < conf.nx; i++) {
        const points = [];
        for (let j = 0; j < conf.ny; j++) {
          points.push(new THREE.Vector3(ox + i * dx, oy + j * dy, 0));
        }

        const polyline = new Polyline({ points });
        polylines.push(polyline);

        const material = new THREE.ShaderMaterial({
          uniforms: {
            uTime,
            uTimeCoef,
            uMat2: { value: mat2 },
            uSize: { value: 1.5 / conf.nx },
            uRnd1: { value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)) },
            uRnd2: { value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)) },
            uRnd3: { value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)) },
            uRnd4: { value: new THREE.Vector3(rnd(-1, 1), rnd(-1, 1), rnd(-1, 1)) },
            uRnd5: { value: new THREE.Vector3(rnd(0.2, 0.5), rnd(0.3, 0.6), rnd(0.4, 0.7)) },
            uColor1: { value: new THREE.Color(conf.cscale(i / conf.nx).hex()) },
            uColor2: { value: new THREE.Color(conf.cscale(i / conf.nx).darken(conf.darken).hex()) }
          },
          vertexShader: vertexShaderCode,
          fragmentShader: fragmentShaderCode
        });

        const mesh = new THREE.Mesh(polyline.geometry, material);
        scene.add(mesh);
      }
    }

    function animate(t) {
      uTime.value = t * 0.001;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }

    return () => {
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return <canvas id="bg-canvas" style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
}

// Vertex & Fragment shaders (mantidos separados por clareza)
const vertexShaderCode = `
uniform float uTime, uTimeCoef;
uniform float uSize;
uniform mat2 uMat2;
uniform vec3 uRnd1, uRnd2, uRnd3, uRnd4, uRnd5;
attribute vec3 next, prev;
attribute float side;
varying vec2 vUv;

vec2 dp(vec2 sv) {
  return (1.5 * sv * uMat2);
}

void main() {
  vUv = uv;
  vec2 pos = dp(position.xy);
  vec2 normal = dp(vec2(1, 0)) * uSize;

  float time = uTime * uTimeCoef;
  vec3 rnd1 = vec3(cos(time * uRnd1.x + uRnd3.x), cos(time * uRnd1.y + uRnd3.y), cos(time * uRnd1.z + uRnd3.z));
  vec3 rnd2 = vec3(cos(time * uRnd2.x + uRnd4.x), cos(time * uRnd2.y + uRnd4.y), cos(time * uRnd2.z + uRnd4.z));
  normal *= 1.0
    + uRnd5.x * (cos((position.y + rnd1.x) * 20.0 * rnd1.y) + 1.0)
    + uRnd5.y * (sin((position.y + rnd2.x) * 20.0 * rnd2.y) + 1.0)
    + uRnd5.z * (cos((position.y + rnd1.z) * 20.0 * rnd2.z) + 1.0);
  pos.xy -= normal * side;
  gl_Position = vec4(pos, 0.0, 1.0);
}
`;

const fragmentShaderCode = `
uniform vec3 uColor1;
uniform vec3 uColor2;
varying vec2 vUv;
void main() {
  gl_FragColor = vec4(mix(uColor1, uColor2, vUv.x), 1.0);
}
`;

// Classe auxiliar Polyline (mesma da original)
class Polyline {
  constructor({ points }) {
    this.points = points;
    this.count = points.length;
    this.init();
    this.updateGeometry();
  }

  init() {
    this.geometry = new THREE.BufferGeometry();
    this.position = new Float32Array(this.count * 3 * 2);
    this.prev = new Float32Array(this.count * 3 * 2);
    this.next = new Float32Array(this.count * 3 * 2);
    const side = new Float32Array(this.count * 2);
    const uv = new Float32Array(this.count * 4);
    const index = new Uint16Array((this.count - 1) * 6);

    for (let i = 0; i < this.count; i++) {
      const i2 = i * 2;
      side.set([-1, 1], i2);
      const v = i / (this.count - 1);
      uv.set([0, v, 1, v], i * 4);
      if (i === this.count - 1) continue;
      index.set([i2, i2 + 1, i2 + 2], i * 6);
      index.set([i2 + 2, i2 + 1, i2 + 3], i * 6 + 3);
    }

    this.geometry.setAttribute('position', new THREE.BufferAttribute(this.position, 3));
    this.geometry.setAttribute('prev', new THREE.BufferAttribute(this.prev, 3));
    this.geometry.setAttribute('next', new THREE.BufferAttribute(this.next, 3));
    this.geometry.setAttribute('side', new THREE.BufferAttribute(side, 1));
    this.geometry.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    this.geometry.setIndex(new THREE.BufferAttribute(index, 1));
  }

  updateGeometry() {
    const tmp = new THREE.Vector3();
    this.points.forEach((p, i) => {
      p.toArray(this.position, i * 6);
      p.toArray(this.position, i * 6 + 3);

      if (i === 0) {
        tmp.copy(p).sub(this.points[i + 1]).add(p);
        tmp.toArray(this.prev, i * 6);
        tmp.toArray(this.prev, i * 6 + 3);
      } else {
        p.toArray(this.next, (i - 1) * 6);
        p.toArray(this.next, (i - 1) * 6 + 3);
      }

      if (i === this.points.length - 1) {
        tmp.copy(p).sub(this.points[i - 1]).add(p);
        tmp.toArray(this.next, i * 6);
        tmp.toArray(this.next, i * 6 + 3);
      } else {
        p.toArray(this.prev, (i + 1) * 6);
        p.toArray(this.prev, (i + 1) * 6 + 3);
      }
    });

    this.geometry.attributes.position.needsUpdate = true;
    this.geometry.attributes.prev.needsUpdate = true;
    this.geometry.attributes.next.needsUpdate = true;
  }
}
