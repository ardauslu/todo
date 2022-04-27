import React from 'react'
import ListItem from './ListItem'
import ListForm from './ListForm';
import NewList from './NewList';
import { useState } from 'react';
import Lists from './Lists';
import Items from './Items';

const DUMMY_LIST = [
  {
    id: 'e1',
    title: 'List 1',
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'List 2', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'List 3',
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'List 4',
    date: new Date(2021, 5, 12),
  },
];

const Dashboard = () => {
  const [lists, setLists] = useState(DUMMY_LIST);

  const addListHandler = (list) => {
    setLists((prevLists) => {
      return [list, ...prevLists];
    });
  };
  return (
    <div>
      <Lists items={lists} />
      <NewList onAddList={addListHandler} />
    </div>
  );
}

export default Dashboard