import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./styles/Button"

function Projects({id}) {
  const data = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsJson {
        edges {
          node {
            alt
            button
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
        <ProjectsCard key={index}>
          <ProjectImg
            src={item.node.img.childImageSharp.fluid.src}
            alt={item.node.alt}
            fluid={item.node.img.childImageSharp.fluid}
          />
          <ProjectsInfo>
            <TextWrap>
              <ProjectTitle>{item.node.name}</ProjectTitle>
            </TextWrap>
            <Button to={item.node.href} primary="true" round="true" target="_blank">
              {item.node.button}
            </Button>
          </ProjectsInfo>
        </ProjectsCard>
      )
    })
    return projectsArray
  }

  return (
    <ProjectsContainer id={id}>
      <ProjectsHeading>Projects</ProjectsHeading>
      <ProjectsWrapper>{getProjects(data)}</ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects

const ProjectsContainer = styled.div`
  padding: 2rem calc((100vw - 1300px) / 2);
  background: #f7f4ff;
`

const ProjectsHeading = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`
const ProjectsWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const ProjectsCard = styled.div`
  width: 100%;
  height: auto;
  margin: 15px 15px;

  @media screen and (max-width: 992px) {
  }
`

const ProjectImg = styled(Img)`
  height: 100%;
  max-width: 100%;
  border-radius: 15px;
  box-shadow: 2px 2px 50px rgba(0, 0, 0, 0.25);

  &:hover {
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
`

const ProjectTitle = styled.div``
