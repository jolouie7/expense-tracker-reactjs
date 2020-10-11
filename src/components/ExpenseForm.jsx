import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { connect } from "react-redux";

import ExpenseTable from "../containers/ExpenseTable";
import errorActions from "../actions/errorActions";
import { addExpense } from "../actions/expenseActions";


const ExpenseForm = ({addExpense}) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("Housing");
  const [error, setError] = useState("")

  const handleChange = (e) => {
    if (e.target.name === "description") {
      setDescription(e.target.value)
    } else if (e.target.name === "amount") {
      setAmount((e.target.value))
    } else {
      setCategory(e.target.value)
      console.log(e.target.value)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check all fields are filled in
    if (description === "" || amount === 0) {
      setError("Please fill in all fields")
      console.log("set error")
    } else {
      setError("")
    }

    const newExpense = {
      description: description,
      amount: parseInt(amount),
      category: category,
    };
    addExpense(newExpense);
    setDescription("");
    setAmount(0);
  };

  // const handleClick = () => {
  //   // Check all fields are filled in
  //   if (description !== "" || expenseAmount !== "" || category !== "") {
  //     setError(null);
  //   } else {
  //     setError("Please fill in all fields");
  //     console.log("set error");
  //   }
  // };

  return (
    <div>
      <Container>
        {error !== "" ? (
          <Alert variant="danger">Please fill in all fields</Alert>
        ) : null}
        <Form onSubmit={handleFormSubmit}>
          <Form.Group>
            <Form.Label>Description*</Form.Label>
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
                <Form.Label>Expense Amount*</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Expense Amount"
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category*</Form.Label>
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
          <Button variant="primary" className="mb-4" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
      <ExpenseTable />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addExpense: (expense) => dispatch(addExpense(expense)),
});

export default connect(null, mapDispatchToProps)(ExpenseForm);
