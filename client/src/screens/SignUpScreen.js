

import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import {useSignup} from '../hooks/useSignup'
import Alert from 'react-bootstrap/Alert';

function SignUpScreen() {
    const [email,setEmail]=useState('');
    const [parola,setParola]=useState('');

    const {signup,yukleniyor,hata}=useSignup()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        
        await signup(email,parola);
    }

  return (
    <Form onSubmit={handleSubmit} className='p-5'>
        <h3 className="text-center">ÜYE OL</h3>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Şifre</Form.Label>
        <Form.Control onChange={(e)=>setParola(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>

      <div className="d-grid gap-2">
        <Button disabled={yukleniyor} type="submit" variant="primary">
           Üye Ol
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

export default SignUpScreen