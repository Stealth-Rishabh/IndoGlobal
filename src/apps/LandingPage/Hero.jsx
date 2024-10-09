import React from "react";
import Container from "../../components/wrappers/Container";
// import bgImg from "../../assets/hero-bg.svg";
import bgImg from "../../assets/bg-hero.png";
import title from "../../assets/hero-title.svg";
const Hero = () => {
  return (
    <section className="hero-section h-96 md:h-[calc(100vh-160px)] lg:h-[calc(100vh-120px)] w-full relative">
      <img
        src={bgImg}
        alt="a student holding a laptop"
        className="object-cover w-full h-full"
      />

      {/* <div></div> */}
      <img
        src={title}
        alt="title"
        className=" absolute top-20 left-10 sm:top-28 sm:left-32 w-[80vw] sm:w-[40vw] top"
      />
    </section>
  );
};

export default Hero;
