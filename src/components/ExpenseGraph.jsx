import React from 'react';
import { connect } from "react-redux";
import { Pie } from 'react-chartjs-2';

const ExpenseGraph = ({ expenses, user, month }) => {
  const expenseObj = {
    "Housing": 0,
    "Transportation": 0,
    "Food": 0,
    "Utilities": 0,
    "Insurance": 0,
    "Medical & Healthcare": 0,
    "Saving, Investing, & Debt Payments": 0,
    "Personal Spending": 0,
    "Recreation & Entertainment": 0,
    "Miscellaneous": 0,
  };

  const expenseLabels = []
  const expenseData = []
  const expenseColors = [
    "#FF6384",
    "#36A2EB",
    "#FFCE56",
    "#52D726",
    "#FF0000",
    "#7CDDDD",
    "#FEAE65",
    "#E6F69D",
    "#AADEA7",
    "#2D87BB",
  ];

  if (expenses.length === 0) {
    return <div>Loading...</div>
  } else {
    const filteredExpenses = expenses.filter(
      (expense) =>
        expense.user === user.id &&
        parseInt(expense.register_date.slice(5, 7)) === month
    );
    // Add to expenseObj
    for (let filteredExpense of filteredExpenses) {
      expenseObj[filteredExpense.category] += filteredExpense.amount
    }
    // Add to labels and expenseData array if the value is > 0
    for (let expense in expenseObj) {
      if (expenseObj[expense] > 0) {
        expenseLabels.push(expense)
        expenseData.push(expenseObj[expense])
      }
    }
  }

  const data = {
    labels: expenseLabels,
    datasets: [
      {
        data: expenseData,
        backgroundColor: expenseColors,
        hoverBackgroundColor: expenseColors,
      },
    ],
  };
  return (
    <div>
      <h2 style={{textAlign: "center"}}>Expenses</h2>
      <Pie data={data} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  expenses: state.expenseReducer.expenses,
  user: state.authReducer.user,
  month: state.dateReducer.month
});

export default connect(mapStateToProps)(ExpenseGraph)
