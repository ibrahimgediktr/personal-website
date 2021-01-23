import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled, { keyframes } from "styled-components"
import Image from "../assets/images/about-image.png"
import "../assets/swiper/swiper-bundle.css"
import { BsArrowLeft } from "react-icons/bs"
import ProgressBar from "../components/ProgressBar"


export default function Carousel() {

  return (
    <Swiper spaceBetween={50} slidesPerView={1}  >
      <SwiperSlide>
        <AboutLeft>
          <AboutHeading>Hi,I'm İbrahim</AboutHeading>
          <AboutDescription>
            I'm Junior Front-end Web Developer.I'm a student of Management
            Information Systems in Turkey I'm interested in Web development
            technologies.I'm also trying to improve myself in Front-end
            Development.
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
        <ProgressBarLeft>
          <ProgressBarHeading>Development Skills</ProgressBarHeading>
          <ProgressBar done="90" bgColor="#23ab67" title="HTML" />
          <ProgressBar done="70" bgColor="#23ab67" title="SASS / CSS" />
          <ProgressBar done="50" bgColor="#23ab67" title="Javascript" />
          <ProgressBar done="35" bgColor="#23ab67" title="React JS" />
        </ProgressBarLeft>
        <ProgressBarRight>
          <ProgressBarHeading>Language Skills</ProgressBarHeading>
          <ProgressBar done="100" bgColor="#23ab67" title="Turkish" />
          <ProgressBar done="60" bgColor="#23ab67" title="English" />
        </ProgressBarRight>
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

const ProgressBarHeading = styled.h3`
  font-size: 1.2rem;
  color: #4b4b4b;
  text-align: center;
`

const ProgressBarLeft = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 50%;
  max-width: 300px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const ProgressBarRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  max-width: 300px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`
