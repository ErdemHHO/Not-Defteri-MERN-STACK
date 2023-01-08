import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';

import {useLogout} from "../hooks/useLogout";
import {useAuthContext} from "../hooks/useAuthContext"


function Header() {
  const {logout}=useLogout();
  const {kullanici}=useAuthContext();
  const handleClick=()=>{
    logout()
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link className="text-decoration-none" to='/'>
            NOT DEFTERİ
          </Link>
        </Navbar.Brand>
        <div  className=' d-flex justify-content-end'>
        {kullanici ? (
          <div> 
            <span>{kullanici.email}</span>
            <Button onClick={handleClick} variant="outline-dark">Çıkış Yap</Button>
          </div>  
        )
        :
        (
        <div>
        <Link className="text-decoration-none" to='/login'><Button variant="outline-dark">Giriş Yap</Button></Link>
        <Link className="text-decoration-none" to='/signup'><Button variant="outline-dark">Üye Ol</Button></Link>
        </div>
        )} 
        </div>
      </Container>
    </Navbar>
  )
}

export default Header