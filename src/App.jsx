// import React from 'react';
// import ExpenseForm from './Component/ExpenseForm';
import ExpenseList from './Component/ExpenseList';
import ExpenseContext from './Component/Context';
// import ExpenseData from './Component/ExpenseData'; 

const App = () => {
  return (
    <>
      <ExpenseContext>
        {/* <ExpenseForm/> */}
        <ExpenseList/>
      </ExpenseContext>
    </>
  )
}

export default App;