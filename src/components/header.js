import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FaBars, FaTimes } from "react-icons/fa"
import { menuData } from "../data/MenuData"

function Header() {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <Nav active={scroll} click={click}>
      <MobileIcon onClick={handleClick}>
        {click ? <Times active={scroll} /> : <Bars active={scroll} />}
      </MobileIcon>
      <NavMenu onClick={handleClick} click={click}>
        {menuData.map((item, index) => (
          <NavLink active={scroll} to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: ${({ active }) => (active ? "#3399cc" : "transparent")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  z-index: 100;
  height: 75px;
`

const NavLink = styled(Link)`
  padding: 20px 15px;
  text-decoration: none;
  color: ${({ active }) => (active ? "#fff" : "#fff")};
  font-size: 1.2rem;
`

const NavMenu = styled.div`
  display: flex;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    position: absolute;
    top: ${({ click }) => (click ? "0%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: #3399cc;
  }
`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    z-index: 5;
  }
`

const Bars = styled(FaBars)`
  color: #fff;
  font-size: 1.8rem;
`

const Times = styled(FaTimes)`
  color: #fff;
  font-size: 1.8rem;
`