import React from 'react'
import ListItem from './ListItem'

const Lists = (props) => {
  return (
    <div>  {props.items.map((expense) => (
      <ListItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}</div>
  )
}

export default Lists