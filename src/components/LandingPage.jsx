import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";


const LandingPage = () => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1>Hello, to your personal expense tracker!</h1>
          <p>To enjoy to Expense Tracker please sign in or register in the Nav</p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default LandingPage
