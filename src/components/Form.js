import React from "react"
import styled from "styled-components"
import { MdError} from 'react-icons/md'
import { FaCheckCircle} from 'react-icons/fa'



class Form extends React.Component {
  constructor(props){
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status : ""
    };
  }

  sendMessage = () =>{
    this.recaptcha.execute()
  }

  render() {
  const {status} = this.state

  return (
    <FormContainer
      className="g-recaptch"
      onSubmit={this.submitForm}
      method="post"
      action="https://formspree.io/f/mleookny"
    >
      <Input name="form-name" type="hidden" value="contact" />
      <FormControl>
        <Label htmlFor="name">Your Full Name</Label>
        <Input
          name="name"
          placeholder="Your Full Name"
          type="text"
          required
          aria-label="Name"

        />
      </FormControl>
      <FormControl>
      <Label htmlFor="email">Your Email</Label>
        <Input
          name="email"
          placeholder="Your Email"
          type="email"
          required
          aria-label="Email"
        />
      </FormControl>
      <FormControl>
      <Label htmlFor="textarea">Subject</Label>
        <TextArea
          name="textarea"
          placeholder="Subject"
          type="text"
          required
          aria-label="Text-area"
        />
      </FormControl>
      {status === 'SUCCESS' ? 
      <FormAlert>
        <CheckIcon />
        Thanks!, Your message has been successfully sent.
        </FormAlert> : <FormButton aria-label="Form Send Button">Send</FormButton> }
      {status === 'ERROR' && 
      <FormAlert>
        <ErrorIcon />
        Ooops! There was an error
        </FormAlert> }
    </FormContainer>
   )
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
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

const Label = styled.label`
  color:#4b4b4b;
  margin-left:12px;
  font-size:16px ;
  @media screen and (max-width:768px){
    font-size:14.4px;
  }
`

const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-top:5px;
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
  margin-top:5px;
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
const FormAlert = styled.p`
  margin-top:10px;
  color:#4b4b4b;
  font-size:16px;
  display:flex;
  align-items:center;
  @media screen and (max-width:576px){
    font-size:14.4px;
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

const CheckIcon = styled(FaCheckCircle)`
  margin-right:6px;
  font-size:30px;
  color:#23ab67;
`
const ErrorIcon = styled(MdError)`
  color:#e74c3c;
  margin-right:6px;
  font-size:30px;
`
