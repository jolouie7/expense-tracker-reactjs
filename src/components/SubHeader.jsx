import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const SubHeader = () => {
  return (
    <div>
      <Container className="text-center my-3">
        {window.location.href.includes("/expense-list") ? (
          <div>
            <Link to="/expense-list">
              <Button className="mr-1 px-4 py-2">Expense List</Button>
            </Link>
            <Link to="/expense-graph">
              <Button variant="outline-primary" className="ml-1 px-4 py-2">
                Expense Graphs
              </Button>
            </Link>
          </div>
        ) : (
          <div>
            <Link to="/expense-list">
              <Button variant="outline-primary" className="mr-1 px-4 py-2">
                Expense List
              </Button>
            </Link>
            <Link to="/expense-graph">
              <Button className="ml-1 px-4 py-2">Expense Graphs</Button>
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}

export default SubHeader
