import React, { useState } from 'react'
import ItemDetail from './ItemDetail'

const Items = (props) => {
  return (
    <div>  {props.data.map((list) => (
      <ItemDetail
        title={list.title}
        date={list.date}
      />
    ))}</div>
  );
}

export default Items