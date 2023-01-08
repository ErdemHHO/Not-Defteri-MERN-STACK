

import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {useLogin} from "../hooks/useLogin"
import Alert from 'react-bootstrap/Alert';



function LoginScreen() {
    const [email,setEmail]=useState('');
    const [parola,setParola]=useState('');

    const{login,yukleniyor,hata}=useLogin();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        await login(email,parola);
    }

  return (
    <Form onSubmit={handleSubmit} className='p-5'>
         <h3 className="text-center">GİRİŞ YAP</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Şifre</Form.Label>
        <Form.Control onChange={(e)=>setParola(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button disabled={yukleniyor}  type="submit" variant="primary">
            Giriş Yap
        </Button>
      </div>
      {hata &&
            <Alert>
                {hata}
            </Alert>
      }
    </Form>
  )
}

export default LoginScreen