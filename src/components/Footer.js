import React from "react"
import styled from "styled-components"
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { menuData } from "../data/MenuData"
import { GrInstagram } from "react-icons/gr"
import { FaGithubSquare } from "react-icons/fa"

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
            <SocialLink
              href="https://www.instagram.com/ibrahimgediktr/"
              target="_blank"
            >
              <Instagram />
            </SocialLink>
            <SocialLink href="https://github.com/ibrahimgediktr" target="_blank">
              <GithubSquare />
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
`

const ColContent = styled.div`
  display: flex;
  flex-direction: column;
  font-size:1rem;
  @media screen and (max-width:576px){
    font-size:0.95rem;
  }
`

const ColLink = styled(AnchorLink)`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  text-decoration: none;
  color: #b2bec3;
`
const Instagram = styled(GrInstagram)`
  font-size: 1.8rem;
  cursor: pointer;
  margin-bottom: 8px;
`
const GithubSquare = styled(FaGithubSquare)`
  font-size: 1.8rem;
  cursor: pointer;
`
