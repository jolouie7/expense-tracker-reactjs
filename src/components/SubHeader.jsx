import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const SubHeader = () => {
  return (
    <div>
      <Container className="text-center my-3">
        <Link to="/expense-list">
          <Button className="mr-1">
            Expense List
          </Button>
        </Link>
        <Button className="ml-1">Expense Graphs</Button>
      </Container>
    </div>
  );
}

export default SubHeader
