
import React from 'react'
import Card from 'react-bootstrap/Card'
import moment from 'moment';
import 'moment/locale/tr' 

import {useNotContext} from "../hooks/useNotContext";

function NotDetay({not}) {
  const {dispatch}=useNotContext();
  const handleClick=async()=>{
    const response=await fetch('/notlar/'+not._id,{
      method:'DELETE'
    })
    const json=await response.json();
    console.log(json)
    if(response.ok){
      dispatch({type:'NOT_SIL',payload:json})
    }
  }
  return (
    <div>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          <div className='text-end'>
              <span className='material-symbols-outlined' onClick={handleClick}>delete</span>
          </div>       
            <Card.Title>{not.baslik}</Card.Title>
            <Card.Text>
                {not.aciklama}
            </Card.Text>
            <Card.Link >{moment(new Date(not.createdAt)).fromNow()}</Card.Link>
        </Card.Body>
    </Card>
    </div>
  )
}

export default NotDetay