import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#3399cc" : "#077BF1")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "10px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#D5D2DA" : "#7633F9")};
    color: #4b4b4b;
  }
`