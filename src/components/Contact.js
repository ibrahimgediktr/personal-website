import React from "react"
import styled from "styled-components"
import Form from "../components/Form"

function Contact() {
  return (
    <ContactContainer>
      <ContactHeading>Contact</ContactHeading>
      <ContactContent>
        <Form />
      </ContactContent>
    </ContactContainer>
  )
}
export default Contact

const ContactContainer = styled.div`
  padding: 2rem calc((100vw - 1300px) / 2);
  padding-left: 1rem;
  padding-right: 1rem;
`
const ContactHeading = styled.h1`
  text-align: center;
  margin-bottom: 2.5rem;
`
const ContactContent = styled.div`
  display: flex;
  justify-content: center;
`
