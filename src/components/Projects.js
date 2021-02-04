import React from "react"
import SwiperCore, { Pagination } from "swiper"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Swiper, SwiperSlide } from "swiper/react"


import "swiper/swiper.scss"

SwiperCore.use([Pagination])

function Projects({ id }) {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            alt
            button
            description
            name
            img {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            href
          }
        }
      }
    }
  `)
  function getProjects(data) {
    const projectsArray = []
    data.allProjectsJson.edges.forEach((item, index) => {
      projectsArray.push(
        <SwiperSlide key={index}>
          <ProjectsCard>
            <ProjectImage>
              <ProjectImg
                src={item.node.img.childImageSharp.fluid.src}
                alt={item.node.alt}
                fluid={item.node.img.childImageSharp.fluid}
              />
              <ProjectImgOverlay></ProjectImgOverlay>
            </ProjectImage>
            <ProjectsInfo>
              <TextWrap>
                <ProjectTitle>{item.node.name}</ProjectTitle>
                <ProjectDescription>{item.node.description}</ProjectDescription>
              </TextWrap>
              <ProjectButton
                rel="noreferrer"
                href={item.node.href}
                primary="true"
                round="true"
                target="_blank"
              >
                {item.node.button}
              </ProjectButton>
            </ProjectsInfo>
          </ProjectsCard>
        </SwiperSlide>
      )
    })
    return projectsArray
  }

  return (
    <ProjectsContainer id={id}>
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsWrapper>
        <Swiper
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1240: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          slidesPerView={1}
          pagination
        >
          {getProjects(data)}
        </Swiper>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects


const ProjectsContainer = styled.div`
  padding: 2rem calc((100vw - 1300px) / 2);
  background: #efecf7;
  user-select: none;
`

const ProjectsHeading = styled.h1`
  text-align: center;
`
const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectsCard = styled.div`
  position: relative;
  width: 100%;
  padding-top: 2rem;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 2rem;

`

const ProjectImage = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
`

const ProjectImg = styled(Img)`
  position: absolute;
  width: 400px;
  height: 222px;
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`

const ProjectImgOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0;
  border-radius: 20px;
  ${ProjectsCard}:hover & {
    opacity: 0.75;
  }
`

const ProjectButton = styled.a`
  display: none;
  position: absolute;
  top: 40%;
  background-color: #23ab67;
  color: white;
  text-decoration: none;
  padding: 10px 32px;
  border-radius: 20px;

  ${ProjectsCard}:hover & {
    display: flex;
  }
`

const ProjectsInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TextWrap = styled.div`
  color: #4b4b4b;
  margin: 10px 0;
  text-align: center;
`

const ProjectTitle = styled.h3`
  text-align: center;
`
const ProjectDescription = styled.p`
  margin-top: 10px;
  text-align: center;
`
