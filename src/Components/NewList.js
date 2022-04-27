import React from 'react'
import './NewList.css'
import ListForm from './ListForm';
const NewList = (props) => {
  const saveListDataHandler = (enteredListData) => {
    const listData = {
      ...enteredListData,
      id: Math.random().toString()
    };
    props.onAddList(listData);
  };

  return (
    <div className='new-list'>
      <ListForm onSaveListData = {saveListDataHandler} />
    </div>
  );
};


export default NewList