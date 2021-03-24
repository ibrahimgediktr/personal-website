import React from "react"
import styled from "styled-components"

function ProgressBar({ done, bgColor, title }) {
  const [style, setStyle] = React.useState({})
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
      backgroundColor: `${bgColor}`,
      title: `${title}`
    }
    setStyle(newStyle)
  }, 200)
  return (
    <Progress>
      <ProgressDone style={style}>{title}</ProgressDone>
    </Progress>
  )
}

export default ProgressBar

const Progress = styled.div`
  background-color: #e0e0e0;
  border-radius: 20px;
  position: relative;
  margin: 12px 0;
  height: 25px;
  width: 100%;
  max-width: 300px;
  font-size:0.85rem;
  
`

const ProgressDone = styled.div`
  box-shadow: 0 4px 4px -5px #485460, 0 3px 6px #d2dae2;
  border-radius: 20px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  height: 100%;
  width: 0;
  opacity: 0;
  transition: 1s ease 0.3s;
`
