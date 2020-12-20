import React, { useState } from "react"
import styled from "styled-components"
import { useAlert } from "react-alert"

function Form() {
  const alert = useAlert()

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    textarea: "",
  })

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert.success("Your message has been successfully sent."))
      .catch(error => alert.error(error))
    e.preventDefault()
  }

  return (
    <FormContainer
      onSubmit={handleSubmit}
      name="contact"
      method="post"
      data-netlify="true"
    >
      <Input name="form-name" type="hidden" value="contact" />
      <FormControl>
        <Input
          onChange={handleChange}
          value={formState.name}
          name="name"
          placeholder="Your Full Name"
          type="text"
          required
        />
      </FormControl>
      <FormControl>
        <Input
          onChange={handleChange}
          value={formState.email}
          name="email"
          placeholder="Your Email"
          type="email"
          required
        />
      </FormControl>
      <FormControl>
        <TextArea
          onChange={handleChange}
          value={formState.textarea}
          name="textarea"
          placeholder="Subject"
          type="text"
          required
        />
      </FormControl>
      <FormButton
        onClick={() => {
          
        }}
      >
        Send
      </FormButton>
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
    border: 3px solid #23ab67;
    outline: 0 none;
  }
`

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 150px;
  padding-left: 15px;
  padding-top: 15px;
  font-size: 1rem;
  border-radius: 10px;
  background: transparent;
  border: 2px solid rgba(178, 190, 195, 0.7);
  &:focus {
    border: 3px solid #23ab67;
    outline: 0 none;
  }
`
const FormButton = styled.button`
  margin-top: 10px;
  background: #23ab67;
  white-space: nowrap;
  padding: 10px 32px;
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: 10px;
  color: #fff;
  &:hover {
    background-color: #05954d;
    color: #fff;
  }
`
