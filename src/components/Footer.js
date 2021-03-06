import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { menuData } from "../data/MenuData"
import { FaGithubSquare } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"


function Footer() {
  return (
    <FooterContainer>
      <Row>
        <Col>
          <ColHeading>About</ColHeading>
          <ColContent>
            <ColDescription>
              This website was made with Gastby Js.
            </ColDescription>
            <ColFooter>© İbrahim Gedik 2020</ColFooter>
          </ColContent>
        </Col>
        <Col>
          <ColHeading>Explore</ColHeading>
          <ColContent>
            {menuData.map((item, index) => (
              <ColLink to={item.link} key={index}>
                {item.title}
              </ColLink>
            ))}
          </ColContent>
        </Col>
        <Col>
          <ColHeading>Social Media</ColHeading>
          <ColContent>
            {/* <SocialLink
              rel="noreferrer"
              href="https://www.instagram.com/ibrahimgediktr/"
              target="_blank"
              aria-label="My Instragram Profile"
            >
              <Instagram />
            </SocialLink> */}
            <SocialLink
              href="https://github.com/ibrahimgediktr"
              target="_blank"
              rel="noreferrer"
              aria-label="My Github Profile"
            >
              <GithubSquare />
            </SocialLink>
            <SocialLink
          href="https://www.linkedin.com/in/ibrahimgedik/"
          target="_blank"
          rel="noreferrer"
          aria-label="My Linkedin profile"
        >
          <LinkedinSquare />
        </SocialLink>
          </ColContent>
        </Col>
      </Row>
    </FooterContainer>
  )
}
export default Footer

const FooterContainer = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  background: #2d3436;
  color: #fff;
  padding-left: 1rem;
  padding-right: 1rem;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 80px;
  @media screen and (max-width: 768px) {
    align-items: center;
    margin: 20px 0;
    text-align: center;
  }
`

const ColHeading = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

const ColDescription = styled.p`
  color: #b2bec3;
`

const ColFooter = styled.span`
  padding-top: 20px;
  color: #b2bec3;
`

const SocialLink = styled.a`
  text-decoration: none;
  color: #b2bec3;
  &:hover{
    filter:brightness(1.2);
    transition:filter 0.3s ease;
  }
`

const ColContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  @media screen and (max-width: 576px) {
    font-size: 0.95rem;
  }
`

const ColLink = styled(AnchorLink)`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  text-decoration: none;
  color: #b2bec3;
  &:hover{
    filter:brightness(1.2);
    transition:filter 0.3s ease;
  }
`
const GithubSquare = styled(FaGithubSquare)`
  font-size: 1.8rem;
  cursor: pointer;
`
const LinkedinSquare = styled(AiFillLinkedin)`
  font-size: 2.1rem;
  cursor: pointer;
  margin-left:-2.5px;
  margin-top:7px;
`
