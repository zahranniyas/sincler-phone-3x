import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSourceSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSourceSet);

    return () => {
      window.removeEventListener("resize", handleVideoSourceSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#heroTitle", {
      opacity: 1,
      delay: 2,
    });

    gsap.to("#cta-btn", {
      opacity: 1,
      y: -70,
      delay: 2,
      duration: 2,
      ease: "back.out",
    });

    gsap.to("#cta-text", {
      opacity: 1,
      y: -70,
      delay: 2.2,
      duration: 2,
      ease: "back.out",
    });
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="heroTitle" className="hero-title">
          Sincler 3x
        </p>
        <div className="w-9/12 md:w-10/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <a
          id="cta-btn"
          href="#highlights"
          className="btn translate-y-[-30px] opacity-0 transition-colors"
        >
          Order Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
