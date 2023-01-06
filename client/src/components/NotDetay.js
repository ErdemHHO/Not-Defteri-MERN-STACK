
import React from 'react'
import Card from 'react-bootstrap/Card'
function NotDetay({not}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{not.baslik}</Card.Title>
            <Card.Text>
                {not.aciklama}
            </Card.Text>
            <Card.Link >{not.createdAt}</Card.Link>
        </Card.Body>
    </Card>
    </div>
  )
}

export default NotDetay