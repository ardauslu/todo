import React from 'react'
import { useState } from 'react';
import './ListForm.css'
const ListForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const listData = {
      title: enteredTitle
    };

    console.log(listData);
    props.onSaveListData(listData);
    setEnteredTitle('');
  };


  return (
    <form onSubmit={submitHandler}>
      <div className='new-list__controls'>
        <div className='new-list__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
      </div>
      <div className='new-list__actions'>
        <button type='submit'>Add List</button>
      </div>
    </form>
  );
}

export default ListForm