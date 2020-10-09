import React from 'react';
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";

const ExpenseTable = ({expenses}) => {
  console.log(expenses)
  return (
    <div>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Date (Year-Month-Day)</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Expense Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2020-09-30T23:00:49.252Z</td>
              <td>$5</td>
              <td>none</td>
              <td>description here</td>
            </tr>
            {expenses.length === 0 ? (
              <div>Loading...</div>
            ) : (
              expenses.map((expense, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{expense.register_date.slice(0,10)}</td>
                  <td>${expense.amount}</td>
                  <td>{expense.category || "none"}</td>
                  <td>{expense.description}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  expenses: state.expenseReducer.expenses,
});

export default connect(mapStateToProps)(ExpenseTable);
