import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import ExpenseTable from "../containers/ExpenseTable";

const ExpenseForm = () => {
  const [description, setDescription] = useState("");
  const [expenseAmount, setExpenseAmount] = useState();
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "description") {
      setDescription(e.target.value)
    } else if (e.target.name === "amount") {
      setExpenseAmount(e.target.value)
    } else {
      setCategory(e.target.value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a expense action to make a post request to server, to add a expense
  }
  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Row>
            <Col>
              <Form.Group>
                <Form.Label>Expense Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Expense Amount"
                  name="amount"
                  value={expenseAmount}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  name="category"
                  value={category}
                  onChange={handleChange}
                >
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
          <Button variant="primary" className="mb-4">
            Submit
          </Button>
        </Form>
      </Container>
      <ExpenseTable />
    </div>
  );
};

export default ExpenseForm;
