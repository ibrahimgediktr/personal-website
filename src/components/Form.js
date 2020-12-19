import React from "react"
import styled from "styled-components"
import { Button } from "./styles/Button"

function Form() {
  return (
    <FormContainer
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <FormControl>
        <Input name="name" placeholder="Your Full Name" type="text" />
      </FormControl>
      <FormControl>
        <Input name="email" placeholder="Your Email" type="email" />
      </FormControl>
      <FormControl>
        <TextArea name="name" placeholder="Subject" type="text" />
      </FormControl>
      <Button
        primary="true"
        css={`
          margin-top: 10px;
        `}
      >
        Send
      </Button>
    </FormContainer>
  )
}

export default Form

const FormContainer = styled.form`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FormControl = styled.div`
  width: 100%;
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 15px;
  padding-left: 15px;
  font-size: 14px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid rgba(178, 190, 195, 0.7);
  &:focus {
    border: 3px solid #3399cc;
    outline: 0 none;
  }
`

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 150px;
  padding-left: 15px;
  padding-top: 15px;
  font-size: 14px;
  border-radius: 10px;
  background: transparent;
  border: 2px solid rgba(178, 190, 195, 0.7);
  &:focus {
    border: 3px solid #3399cc;
    outline: 0 none;
  }
`
