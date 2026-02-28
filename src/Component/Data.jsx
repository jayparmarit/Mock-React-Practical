import React from "react";
import { expense } from "./ExpenseContext";
import { useContext } from "react";

const ExpenseData = () => {
  const { credit, debit, balance } = useContext(expense);

  return (
    <>
      <div className="d-flex text-white w-75 mb-4 align-items-center justify-content-center py-4 rounded-5 border" style={{background:"rgba(255, 255, 255, 0.753)"}}>
        <h1 className="me-2 text-dark fw-bold">Credit:</h1>
        <h1 className="text-secondary">{credit}</h1>
      </div>

      <div className="d-flex text-white w-75 border mb-4 align-items-center justify-content-center py-4 rounded-5"style={{background:"rgba(255, 255, 255, 0.753)"}}>
        <h1 className="me-2 text-dark fw-bold">Debit:</h1>
        <h1 className="text-secondary">{debit}</h1>
      </div>

      <div className="d-flex text-white w-75 border mb-4 align-items-center justify-content-center py-4 rounded-5"style={{background:"rgba(255, 255, 255, 0.753)"}}>
        <h1 className="me-2 text-dark fw-bold">Total Balance:</h1>
        <h1 className="text-secondary">{balance}</h1>
      </div>
    </>
  );
};

export default ExpenseData;