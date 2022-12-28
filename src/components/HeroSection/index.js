import React from "react";
import Video from "../../video/video.mp4";
import { HeroBg, HeroContainer, VideoBg,HeroP,HeroH1,HeroContent } from "./HeroElements";
function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Crediux </HeroH1>
        <HeroP>
            Servicios Financieros
        </HeroP>
      </HeroContent>
    </HeroContainer>
  );
}

export default HeroSection;
