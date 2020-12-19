import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import styled, { keyframes } from "styled-components"
import Image from "../assets/images/about-image.png"
import "swiper/swiper-bundle.css"
import { BsArrowLeft } from "react-icons/bs"
import ProgressBar from "../components/ProgressBar"

export default function Carousel() {
  return (
    <Swiper spaceBetween={50} slidesPerView={1}>
      <SwiperSlide>
        <AboutLeft>
          <AboutHeading>Hi,I'm Ibrahim</AboutHeading>
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
          <ProgressBar done="90" bgColor="#3399cc" title="HTML" />
          <ProgressBar done="70" bgColor="#3399cc" title="SASS/CSS" />
          <ProgressBar done="50" bgColor="#3399cc" title="Javascript" />
          <ProgressBar done="45" bgColor="#3399cc" title="React JS" />
          <ProgressBar done="40" bgColor="#3399cc" title="Python" />
        </ProgressBarLeft>
        <ProgressBarRight>
          <ProgressBarHeading>Languages Skills</ProgressBarHeading>
          <ProgressBar done="100" bgColor="#3399cc" title="Turkish" />
          <ProgressBar done="60" bgColor="#3399cc" title="English" />
        </ProgressBarRight>
      </SwiperSlide>

      <SwiperSlide></SwiperSlide>
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
  font-size: 24px;
`

const AboutDescription = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: rgba(0, 0, 0, 0.65);
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
  color: #3399cc;
  font-weight: 700;
  animation: ${skimmy} 1.5s linear infinite;
`

const Arrow = styled(BsArrowLeft)`
  color: #3399cc;
  font-size: 40px;
`

const SwiperButtonContent = styled.span`
  margin-left: 5px;
  font-size: 22px;
`

const ProgressBarHeading = styled.h3`
  font-size: 24px;
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
