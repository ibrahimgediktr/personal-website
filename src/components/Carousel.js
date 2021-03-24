import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled, { keyframes } from "styled-components"
import Image from "../assets/images/about-image.png"
import "../assets/swiper/swiper-bundle.css"
import { BsArrowLeft } from "react-icons/bs"
import ProgressBar from "../components/ProgressBar"


// Icons
import { FaReact } from 'react-icons/fa' // React.js
import { DiCss3 } from 'react-icons/di' // Css
import { AiFillHtml5 } from 'react-icons/ai' // Html
import { SiJavascript } from 'react-icons/si' // Javascript
import { GrNode } from 'react-icons/gr' // Node.js
import { DiGitBranch } from 'react-icons/di' // Git
import { DiSass } from 'react-icons/di' // Sass
import { BsFillBootstrapFill } from 'react-icons/bs' // Bootstrap
import { ImNpm } from 'react-icons/im' // Npm
import { DiGulp } from 'react-icons/di' // Gulp
import { SiStyledComponents } from 'react-icons/si'

export default function Carousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}  >
      <SwiperSlide>
        <AboutLeft>
          <AboutHeading>Hi,I'm İbrahim</AboutHeading>
          <AboutDescription>
            I'm <span style={{ fontWeight: "bolder" }}>Junior Front-end Developer</span>. I'm a student of Management
            Information Systems in Turkey. I'm interested in Web development
            technologies. I'm also trying to improve myself in Front-end
            Development. I'm currently learning <span style={{ color: "#f1c40f", textShadow: "0.5px 0px #bdc3c7", fontWeight: "bold", letterSpacing: "1.5px" }}>Javascript</span> and actively using <span style={{ color: "#3498db", textShadow: "0.5px 0px #bdc3c7", fontWeight: "bold", letterSpacing: "1.5px" }}>React.js</span> and <span style={{ color: "#2ecc71", textShadow: "0.5px 0px #bdc3c7", fontWeight: "bold", letterSpacing: "1.5px" }}>Node.js</span> technologies.
          </AboutDescription>
          <SwiperButton>
            <Arrow />
            <SwiperButtonContent>Swipe</SwiperButtonContent>
          </SwiperButton>
        </AboutLeft>
        <AboutRight>
          <AboutImage src={Image} alt="About image" />
        </AboutRight>
      </SwiperSlide>

      <SwiperSlide>

      <SkillSectionContainer>
      <SkillSectionLeft>
          <SkillSectionHeading>Technologies I use</SkillSectionHeading>
          <SkillTagsContainer>

            <SkillTags style={{ background: "#d35400" }}>
              <AiFillHtml5 color="white" size={18} />
              <Span style={{ color: "white" }}>HTML</Span>
            </SkillTags>

            <SkillTags style={{ background: "#686de0" }}>
              <DiCss3 color="white" size={18} />
              <Span style={{ color: "white" }}>CSS</Span>
            </SkillTags>

            <SkillTags style={{ background: "#ff6b6b" }}>
              <DiSass color="white" size={18} />
              <Span style={{ color: "white" }}>SASS</Span>
            </SkillTags>


            <SkillTags style={{ background: "#f1c40f" }}>
              <SiJavascript color="white" size={18} />
              <Span style={{ color: "white", marginLeft: "7px" }}>Javascript</Span>
            </SkillTags>

            <SkillTags style={{ background: "#3498db" }}>
              <FaReact color="white" size={18} />
              <Span style={{ color: "white" }}>React</Span>
            </SkillTags>

            <SkillTags style={{ background: "#6ab04c" }}>
              <GrNode color="white" size={18} />
              <Span style={{ color: "white" }}>Node.js</Span>
            </SkillTags>

            <SkillTags style={{ background: "#ff6348" }}>
              <DiGitBranch color="white" size={18} />
              <Span style={{ color: "white", marginLeft: "2px" }}>Git</Span>
            </SkillTags>

            <SkillTags style={{ background: "#8e44ad" }}>
              <BsFillBootstrapFill color="white" size={18} />
              <Span style={{ color: "white" }}>Bootstrap</Span>
            </SkillTags>

            <SkillTags style={{ background: "#c0392b" }}>
              <ImNpm color="white" size={18} />
              <Span style={{ color: "white" }}>NPM</Span>
            </SkillTags>

            <SkillTags style={{ background: "#e74c3c" }}>
              <DiGulp color="white" size={18} />
              <Span style={{ color: "white" }}>Gulp</Span>
            </SkillTags>

            <SkillTags style={{ background: "#e74c3c" }}>
              <SiStyledComponents color="white" size={20} />
              <Span style={{ color: "white" }}>Styled Components</Span>
            </SkillTags>
          </SkillTagsContainer>
        </SkillSectionLeft>

        <ProgressBarRight>
          <ProgressBarHeading>Language Skills</ProgressBarHeading>
          <ProgressBarContainer>
            <ProgressBar done="100" bgColor="#23ab67" title="Turkish" />
            <ProgressBar done="50" bgColor="#23ab67" title="English" />
          </ProgressBarContainer>
        </ProgressBarRight>
      </SkillSectionContainer>

      </SwiperSlide>
    </Swiper>
  )
}




const skimmy = keyframes`
    0%  {
      transform:translate(0px)
    }
    50%{
      transform:translate(-20px)
    }
    100% {
      transform:translate(0)
    }
  `

const AboutLeft = styled.div`
  position: relative;
  color: #4b4b4b;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const AboutHeading = styled.h3`
  font-size: 1.8rem;
`

const AboutDescription = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.65);
  letter-spacing:0.5px;
  line-height:1.4;
`

const AboutRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const AboutImage = styled.img`
  width: 100%;
  max-width: 250px;
  min-width: 200px;
`
const SwiperButton = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #23AB67;
  font-weight: 700;
  animation: ${skimmy} 1.5s linear infinite;
`

const Arrow = styled(BsArrowLeft)`
  color: #23AB67;
  font-size: 3rem;
`

const SwiperButtonContent = styled.span`
  margin-left: 5px;
  font-size: 22px;
`

const SkillSectionContainer = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  align-items:start;
  grid-gap:20px;
  @media screen and (max-width:992px){
    grid-template-columns:1fr;
  }
`

const SkillSectionHeading = styled.h3`
  font-size: 1.2rem;
  color: #4b4b4b;
  text-align: center;
  font-weight:bolder;
  
`

const SkillSectionLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  position:relative;
  width:60%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const SkillTagsContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  align-items:flex-start;
`

const SkillTags = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:10px;
  border-radius:5px;
  margin:20px 8px 0px;
`

const Span = styled.span`
  color:#fff;
  margin-left:3px;
  font-size:15px;
`

const ProgressBarRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  width:100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
  }
`

const ProgressBarHeading = styled.h3`
  font-size: 1.2rem;
  color: #4b4b4b;
  text-align: center;
  font-weight:bolder;
  
`

const ProgressBarContainer = styled.div`
  width:100%;
  margin-top:10px;
`