import React, { useState } from 'react';

import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
  // Activate React hook. Must include default state value.
  // Registers state for a specific component instance. States are detatched from other states.
  // Returns array with two elements. First element is data element, second element is function to update data element.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // Update is not executed immediately, but is 'scheduled'.
    // E.g. the `title` variable after this call will not hold the updated value
    setTitle('Updated!');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
