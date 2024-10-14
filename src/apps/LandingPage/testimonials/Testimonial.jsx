import React, { useState } from "react";
import OrbitingCircles from "../../../components/ui/orbiting-circles";
import Container from "../../../components/wrappers/Container";
import img from "../../../assets/test0.png";
import img1 from "../../../assets/test1.png";
import img2 from "../../../assets/test2.png";
import img3 from "../../../assets/test3.png";
import img4 from "../../../assets/test4.png";

export function Testimonials() {
  // Set initial state for the central image and orbiting images
  const [centralImage, setCentralImage] = useState(img);
  const [orbitingImages, setOrbitingImages] = useState({
    people1: img1,
    people2: img2,
    people3: img3,
    people4: img4,
  });

  // Add a state for triggering fade animation
  const [fade, setFade] = useState(false);

  // Function to handle image swapping with fade effect
  const handleImageClick = (person) => {
    setFade(true); // Trigger fade-out effect

    // Wait for fade-out to complete before swapping the images
    setTimeout(() => {
      const temp = centralImage;
      setCentralImage(orbitingImages[person]);
      setOrbitingImages((prevImages) => ({
        ...prevImages,
        [person]: temp,
      }));
      setFade(false); // Trigger fade-in effect after swap
    }, 300); // Adjust the timeout to match the fade-out duration
  };

  return (
    <Container>
      <div className="relative h-screen flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        {/* Central Image with Fade Effect */}
        <span
          className={`pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <img src={centralImage} alt="Central" className="w-[120px]" />
        </span>

        {/* Orbiting Circles (explicitly defined without map) */}

        <OrbitingCircles
          className="size-[80px] border-none"
          radius={150}
          duration={20}
          reverse
        >
          <img
            src={orbitingImages.people1}
            alt="Person 1"
            className={`w-[80px] cursor-pointer transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => handleImageClick("people1")}
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[80px] border-none"
          radius={290}
          duration={20}
          delay={15}
        >
          <img
            src={orbitingImages.people2}
            alt="Person 2"
            className={`w-[80px] cursor-pointer transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => handleImageClick("people2")}
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[80px] border-none"
          radius={150}
          duration={20}
          delay={20}
          reverse
        >
          <img
            src={orbitingImages.people3}
            alt="Person 3"
            className={`w-[80px] cursor-pointer transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => handleImageClick("people3")}
          />
        </OrbitingCircles>

        <OrbitingCircles
          className="size-[80px] border-none"
          radius={290}
          duration={20}
          delay={25}
        >
          <img
            src={orbitingImages.people4}
            alt="Person 4"
            className={`w-[80px] cursor-pointer transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
            onClick={() => handleImageClick("people4")}
          />
        </OrbitingCircles>
      </div>
    </Container>
  );
}
