import React from 'react'
import './ListItem.css';
const ItemDetail = (props) => {
  return (
    <div className='list-item'>
      <div className='list-item__description'>
        <h2>{props.title}</h2>
        <h3>{props.date.toString()}</h3>  
      </div>
    </div>
    );
}

export default ItemDetail