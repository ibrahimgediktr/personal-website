import React from "react"
import styled from "styled-components"
import { Button } from "./styles/Button"
import Image from "../assets/images/hero-bg-desktop.jpg"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { motion } from "framer-motion"
import {
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  transition,
} from "./animations/animation"
import { FaGithubSquare } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"

function Hero() {
  return (
    <HeroContainer>
      <HeroBg>
        <ImageBg src={Image} alt="Hero Background" />
        <ImageOverlay />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1
            initial="out"
            animate="in"
            variants={fadeInLeft}
            transition={transition}
          >
            İbrahim Gedik
          </HeroH1>
          <HeroP
            initial="out"
            animate="in"
            variants={fadeInRight}
            transition={transition}
          >
            Jr. Front-end Developer
          </HeroP>
          <HeroLink
            to="/#projects"
            initial="out"
            animate="in"
            variants={fadeInDown}
            transition={transition}
          >
            <Button
              aria-label="See My Projects Button"
              to="/#projects"
              primary="true"
            >
              See My Projects
            </Button>
          </HeroLink>
        </HeroItems>
      </HeroContent>
      <HeroContentBottom>
        <SocialLink
          initial="out"
          animate="in"
          variants={fadeInLeft}
          transition={transition}
          href="https://github.com/ibrahimgediktr"
          target="_blank"
          rel="noreferrer"
          aria-label="My Github Profile"
        >
          <GithubSquare />
        </SocialLink>
        <SocialLink
          initial="out"
          animate="in"
          variants={fadeInRight}
          transition={transition}
          href="https://www.linkedin.com/in/ibrahimgedik/"
          target="_blank"
          rel="noreferrer"
          aria-label="My Linkedin profile"
        >
          <LinkedinSquare />
        </SocialLink>
      </HeroContentBottom>
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
  overflow:hidden;
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

const HeroContentBottom = styled.div`
  position: absolute;
  top: 65%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

const SocialLink = styled(motion.a)`
  text-decoration: none;
  color: #b2bec3;
  margin-top: 20px;
  &:hover{
    filter:brightness(1.2);
    transition:filter 0.3s ease;
  }
`

const GithubSquare = styled(FaGithubSquare)`
  font-size: 2rem;
  cursor: pointer;
  margin-right:8px;
`
const LinkedinSquare = styled(AiFillLinkedin)`
  font-size: 2.17rem;
  cursor: pointer;
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
const HeroH1 = styled(motion.h1)`
  font-size: clamp(1.5rem, 6vw, 2.4rem);
  margin-bottom: 1rem;
  letter-spacing: 2px;
  padding: 0 1rem;
  text-align: center;
`
const HeroP = styled(motion.p)`
  font-size: clamp(1rem, 3vw, 1.4rem);
  margin-bottom: 2rem;
  letter-spacing: 1px;
  text-align: center;
`

const HeroLink = styled(AnchorLink)`
  text-decoration: none;
`
