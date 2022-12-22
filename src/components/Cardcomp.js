import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Cardcomp(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.images} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Button variant="primary" href='https://www.teachingbanyan.com/10-lines/10-lines-on-deer/'>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcomp;
// "https://images.unsplash.com/photo-1670958259617-20127980a3d8?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1179&amp;q=80" />
      
