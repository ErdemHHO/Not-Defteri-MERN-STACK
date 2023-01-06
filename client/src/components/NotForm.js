
import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

function NotForm() {
    const [baslik,setBaslik]=useState('');
    const [aciklama,setAciklama]=useState('');
    const [hata,setHata]=useState(null)
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const not={baslik,aciklama}
        console.log(not);

        const response=await fetch('/notlar',{
            method:'POST',
            body:JSON.stringify(not),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const json=await response.json();
        if(!response.ok){
            setHata(json.msg);
        }
        if(response.ok){
            setHata(null);
            setBaslik('');
            setAciklama('');
            console.log("Yeni bir not eklendi", json);
        }
    }

  return (
    <Form className="px-5 mx-5" onSubmit={handleSubmit}>
        <h3 className="text-center">Yeni Bir Not Ekle</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Baslik Giriniz:</Form.Label>
            <Form.Control type="text" placeholder="Baslik Girin" onChange={(e)=>setBaslik(e.target.value)} value={baslik}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Aciklama Giriniz:</Form.Label>
            <Form.Control type="text" placeholder="Aciklama Girin" onChange={(e)=>setAciklama(e.target.value)} value={aciklama}/>
        </Form.Group>
        <div className="d-grid gap-2">
            <Button type="submit" >
                Kaydet
            </Button>
        </div>
        <br />
        {hata &&
            <Alert>
                {hata}
            </Alert>
        }
    </Form>
  )
}

export default NotForm