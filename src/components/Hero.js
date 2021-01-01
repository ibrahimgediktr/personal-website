import React from "react"
import styled from "styled-components"
import { Button } from "./styles/Button"
import Image from "../assets/images/hero-bg-desktop.jpg"
import { AnchorLink } from "gatsby-plugin-anchor-links"

function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} alt="Hero Background" />
        <ImageOverlay />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>İbrahim Gedik</HeroH1>
          <HeroP>Jr. Front-end Developer</HeroP>
          <HeroLink to="/#projects">
            <Button primary="true">See My Projects</Button>
          </HeroLink>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 100vh;
  padding: 0rem 1rem;
  position: relative;
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
const HeroContent = styled.div`
  z-index: 4;
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 100%;
  padding: 0;
  color: #fff;
  line-height: 1.1;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 2.4rem);
  margin-bottom: 1rem;
  letter-spacing: 2px;
  padding: 0 1rem;
  text-align: center;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 1.4rem);
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-align: center;
`

const HeroLink = styled(AnchorLink)`
  text-decoration: none;
`
