import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button variant="success">Primary</Button>
          <br></br>
          <Link to="/about">About</Link>
        </p>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require("./nature.jpeg")} />
          <Card.Body>
            <Card.Title style={{ color: '#333' }}>Card Title</Card.Title>
            <Card.Text className="bodyText">
              <Image src={require("./nature.jpeg")} roundedCircle />
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
    </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </header>
    </div>
  );
}

export default App;
