import React from 'react';
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ExpenseTable from "../containers/ExpenseTable";

const ExpenseForm = () => {
  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Expense Amount</Form.Label>
                <Form.Control type="number" placeholder="Expense Amount" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control as="select">
                  <option value="Housing">Housing</option>
                  <option value="Transportation">Transportation</option>
                  <option value="Food">Food</option>
                  <option value="Utilities">Utilities</option>
                  <option value="Insurance">Insurance</option>
                  <option value="Medical & Healthcare">
                    Medical & Healthcare
                  </option>
                  <option value="Saving, Investing, & Debt Payments">
                    Saving, Investing, & Debt Payments
                  </option>
                  <option value="Personal Spending">Personal Spending</option>
                  <option value="Recreation & Entertainment">
                    Recreation & Entertainment
                  </option>
                  <option value="Miscellaneous">Miscellaneous</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>
          <Button variant="primary" className="mb-4">Submit</Button>
        </Form>
      </Container>
      <ExpenseTable />
    </div>
  );
}

export default ExpenseForm
