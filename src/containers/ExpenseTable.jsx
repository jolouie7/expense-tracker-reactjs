import React, {useState, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";

import { deleteExpense, getExpenses } from "../actions/expenseActions";
import UpdateModal from "../components/UpdateModal";
import MonthPicker from "../components/MonthPicker";

const ExpenseTable = ({ expenses, deleteExpense, user, month }) => {
  // const [startDate, setStartDate] = useState(new Date());

  const handleClick = (expense) => {
    deleteExpense(expense._id);
    window.location.reload();
  };

  return (
    <div>
      <Container>
        <MonthPicker />
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
            {expenses.length === 0 ? (
              <div>Loading...</div>
            ) : (
              expenses
                .filter((expense) => expense.user === user.id && parseInt(expense.register_date.slice(5, 7)) === month)
                .map((expense, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{expense.register_date.slice(0, 10)}</td>
                    <td>${expense.amount}</td>
                    <td>{expense.category || "none"}</td>
                    <td>{expense.description}</td>
                    <td>
                      <Button
                        className="mr-2"
                        variant="danger"
                        onClick={() => handleClick(expense)}
                      >
                        Delete
                      </Button>
                      {/* <Button className="px-3" variant="info">Edit</Button> */}
                      <UpdateModal expense={expense} />
                    </td>
                  </tr>
                ))
            )}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenseReducer.expenses,
  user: state.authReducer.user,
  month: state.dateReducer.month
});

const mapDispatchToProps = (dispatch) => ({
  deleteExpense: (id) => dispatch(deleteExpense(id)),
  getExpenses: (id) => dispatch(getExpenses()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseTable);
