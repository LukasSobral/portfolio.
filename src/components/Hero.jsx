import React from 'react';

const Hero = () => {
  return (
      <section
    className="fullscreen-container text-light py-5 d-flex flex-column justify-content-center align-items-center"
    data-aos="fade-up"
    >
    <div className="text-center">
      <h1 data-aos="fade-up" data-aos-delay="100">
        Hi, I'm <span className="highlight">Lucas Sobral</span>
      </h1>
      <h4 className="mb-3" data-aos="fade-up" data-aos-delay="200">
        Software Engineer & AI Developer
      </h4>
      <p data-aos="fade-up" data-aos-delay="300">
        Building scalable backends, intelligent systems and process automations.
      </p>
      <div className="mt-4" data-aos="fade-up" data-aos-delay="400">
        <a className="btn btn-primary me-3" href="#">Download Resume</a>
        <a className="btn btn-outline-light" href="#">Contact Me</a>
      </div>
    </div>
  </section>

  );
};

export default Hero;
