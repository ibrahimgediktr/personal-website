import React from "react"
import styled from "styled-components"
import Carousel from "../components/Carousel"

function About({id}) {
  return (
    <SectionContainer id={id}>
      <Carousel />
    </SectionContainer>
  )
}

export default About

const SectionContainer = styled.section`
  padding: 2rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #4b4b4b;
  overflow: hidden;
  display: flex;
  justify-content: center;
  padding-left: 1rem;
  padding-right: 1rem;
`
