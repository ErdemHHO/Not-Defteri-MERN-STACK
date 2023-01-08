
import React from 'react'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

import {useNotContext} from '../hooks/useNotContext';
import {useAuthContext} from '../hooks/useAuthContext';

function NotForm() {
    const [baslik,setBaslik]=useState('');
    const [aciklama,setAciklama]=useState('');
    const [hata,setHata]=useState(null);
    const [bosAlanlar,setBosalanlar]=useState([]);

    const {dispatch}=useNotContext();
    const {kullanici}=useAuthContext();

    const handleSubmit=async (e)=>{
        e.preventDefault();

        if(!kullanici){
            setHata('Giriş Yapmalısınız');
            return
        }

        const not={baslik,aciklama}
        // console.log(not);

        const response=await fetch('/notlar',{
            method:'POST',
            body:JSON.stringify(not),
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${kullanici.token}`
            }
        })
        const json=await response.json();
        if(!response.ok){
            setHata(json.msg);
            setBosalanlar(json.bosAlanlar);
        }
        if(response.ok){
            setHata(null);
            setBaslik('');
            setAciklama('');
            setBosalanlar([]);
            dispatch({type:'NOT_OLUSTUR',payload:json})
            // console.log("Yeni bir not eklendi", json);
        }
    }

  return (
    <Form className="px-5 mx-5" onSubmit={handleSubmit}>
        <h3 className="text-center">Yeni Bir Not Ekle</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Baslik Giriniz:</Form.Label>
            <Form.Control className={bosAlanlar.includes('baslik')?'error':''} type="text" placeholder="Baslik Girin" onChange={(e)=>setBaslik(e.target.value)} value={baslik}/>
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