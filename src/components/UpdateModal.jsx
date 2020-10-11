import React, {useState, useEffect} from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Alert from "react-bootstrap/Alert";

import {updateExpense} from "../actions/expenseActions";

function UpdateModal({expense, updateExpense}) {
  // Inputs
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  // Modal state
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setAmount(expense.amount)
    setDescription(expense.description)
    setCategory(expense.category)
  }, [])

  const handleChange = (e) => {
    if (e.target.name === "description") {
      setDescription(e.target.value);
    } else if (e.target.name === "amount") {
      setAmount(e.target.value);
    } else {
      setCategory(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      description: description,
      amount: parseInt(amount),
      category: category,
    };
    updateExpense(expense._id, newExpense);
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <Button className="px-3" variant="info" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={handleSubmit}>
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
                      <option value="Personal Spending">
                        Personal Spending
                      </option>
                      <option value="Recreation & Entertainment">
                        Recreation & Entertainment
                      </option>
                      <option value="Miscellaneous">Miscellaneous</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Form.Row>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
              </Modal.Footer>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  updateExpense: (id, expense) => dispatch(updateExpense(id, expense)),
});

export default connect(null, mapDispatchToProps)(UpdateModal);
