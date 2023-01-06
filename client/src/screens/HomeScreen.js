import React from 'react'
import {useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useNotContext } from '../hooks/useNotContext';
import NotDetay from '../components/NotDetay'
import NotForm from '../components/NotForm'

function HomeScreen() {
  // const [notlar,setNotlar]=useState(null);
  const {notlar,dispatch}=useNotContext();
  useEffect(()=>{

    const fetchNotlar=async()=>{

      const response=await fetch('/notlar');

      const json=await response.json();
      
      if(response.ok){
        // setNotlar(json);
        dispatch({type:'NOT_DOLDUR',payload:json})
      }
    }

    fetchNotlar();

  },[dispatch])
  return (
    <div className='p-5'>
      <div>
        <NotForm />
      </div>
      <Container className='pt-5'>
          <Row>
            {notlar && notlar.map((not)=>(
            <Col key={not._id}>
                <NotDetay not={not} />
            </Col> 
            ))}     
          </Row>
      </Container>
    </div> 
  )
}

export default HomeScreen