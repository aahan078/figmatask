import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../src/images/Logo.png'
import flag from '../src/images/NZ Flag.png'
import cart from '../src/images/cart.png'
import '../src/header.css'


export default function Header() {
  return (
    <div>
    <Navbar collapseOnSelect expand="lg" className='color-nav' variant="light">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt='logo'></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='chabil'>ABOUT CHABIL</Nav.Link>
            <Nav.Link href="#pricing" className='shop'>SHOP</Nav.Link>
            <Nav.Link href="#pricing" className='contact'>CONTACT</Nav.Link>
            <Nav.Link href="#pricing" className='retailers'>RETAILERS</Nav.Link>
          
          </Nav>
          <Nav className='nav--2'>
            <Nav.Link href="#deets" className='mt-1 login--1'>LOGIN</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='nz-img mt-1'>
              <img src={flag} alt='nz'></img>
            </Nav.Link>
            <Nav.Link href="#deets" className='mt-1'>
              <img src={cart} alt='cart'></img>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
