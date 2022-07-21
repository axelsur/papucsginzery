import React, { useState } from 'react'

import styled from 'styled-components'
import BurguerButton from './BurguerButton'
import { BiCart } from "react-icons/bi"; //Boxicons
import { GiConverseShoe } from "react-icons/gi"; //Boxicons


function Navbar() {

  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <div className='logo'>
        <GiConverseShoe className="iconmain"/> 
        <h2 className='namelogo'><span>PAPUCS</span></h2>
        </div>
        
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="#h">Inicio</a>
          <a onClick={handleClick} href="#h">Comprar</a>
          <a onClick={handleClick} href="#h">Nosotros</a>
          <a onClick={handleClick} href="#h">Contacto</a>
          <a onClick={handleClick} href="#h"> <BiCart className="iconstyle"/> </a>
        </div>
        <div className='burguer'>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

export default Navbar

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
  }
  padding: .4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: flex;
      justify-content: center;
      flex-direction: row;
      
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      display: flex;
      a{
        font-size: 1rem;
        color: white;
        padding:5px;
        vertical-align: middle;
        
      }
      a:hover{
        color:black;
        border:none;
        border-radius:10px;
        background-color: white;
        padding:5px;
        transition: 0.7s;
      }
    }
  }

  .links.active{
    width: 50%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
      padding:5px;
    }
    a:hover{
        position: relative;
        border:none;
        border-radius:10px;
        background-color: white;
        color:black;
        padding:5px;
        transition: 0.7s;
      }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
  }
`

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    /* border-radius: 0 0 80% 0; */
    background-color: rgba(34, 34, 34, 1);
    opacity: 0.7;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`