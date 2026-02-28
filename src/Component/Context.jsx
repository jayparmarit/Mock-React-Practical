import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const expense = createContext({
  add: () => {},
  list: [],
  update: () => {},
  deleteData: () => {},
  editValue: null,
  balance: 0,
  credit: 0,
  debit: 0,
});

const ExpenseContext = ({ children }) => {
  const initialState = [
    {
      id: 1,
      title: "Salary",
      amount: "10000",
      category: "general",
      type: "credit",
    },
  ];

  const [data, setData] = useState(() => {

    const saved = localStorage.getItem("expenses");

    return saved ? JSON.parse(saved) : initialState;
  });

  const [editValue, setEditValue] = useState(null);

  console.log("data", data);

  const add = (input) => {
    if (!input.title || !input.amount || !input.type || !input.category) {
      alert("please fill all the data required");
    } else if (editValue) {
      setData((prev) =>
        prev.map((d) =>
          d.id === editValue.id
            ? {
                ...d,
                title: input.title,
                amount: input.amount,
                type: input.type,
                category: input.category,
              }
            : d
        )
      );
      setEditValue(null);
    } else {
      const newData = {
        id: new Date().getTime(),
        title: input.title,
        amount: input.amount,
        type: input.type,
        category: input.category,
      };
      setData((prev) => [...prev, newData]);
    }
  };


  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(data))
  },[data])

  console.log("data", data);


  const update  = (id) => {
    console.log("id" ,id);

    const updateVal = data.find((d) => d.id === id);

    console.log("update", updateVal)

    setEditValue(updateVal)
  }


  const deleteData = (id) => {
    const remainData = data.filter((d) => d.id !== id)

    setData(remainData);
  }


  const debit = data
  .filter((d) => d.type === "debit")
  .reduce((acc, curr) => {
    acc += Number(curr.amount);
    return acc;
  },0);


  const credit = data
  .filter((d) => d.type === "credit")
  .reduce((acc, curr) => {
    acc += Number(curr.amount);
    return acc;
  },0)

  
  const balance = credit - debit;

  console.log("debit" , debit);

  console.log("credit" , credit);

  console.log("balance", balance);
  
  const value = {
    add,
    list: data,
    update,
    editValue,
    deleteData,
    credit,
    debit,
    balance,
  }

  return <expense.Provider value={value}> {children} </expense.Provider>;
};

export default ExpenseContext;