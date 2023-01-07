import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to='/'>
            NOT DEFTERİ
          </Link>
        </Navbar.Brand>
        <div  className=' d-flex justify-content-end'>
            <Link className="text-decoration-none" to='/login'>
            <Button variant="outline-dark">Giriş Yap</Button>
            </Link>
            <Link className="text-decoration-none" to='/signup'>
            <Button variant="outline-dark">Üye Ol</Button>
            </Link>
        </div>
      </Container>
    </Navbar>
  )
}

export default Header