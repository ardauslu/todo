import React from 'react'
import ListItem from './ListItem'

const Lists = (props) => {
  return (
    <div>  {props.items.map((list) => (
      <ListItem
        title={list.title}
      />
    ))}</div>
  )
}

export default Lists