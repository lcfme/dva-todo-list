import React from 'react'

export default (props) => {
  return (
    <li>
      <input type="checkbox" checked={props.done} onChange={()=>{props.dispatch({
        type: 'todos/changeDoneAsync',
        id: props.id,
        done: !props.done
      })}}/>
      {props.title}
      <button onClick={()=>{props.dispatch({
        type: 'todos/delAsync',
        id: props.id
      })}}>删除</button>
    </li>
  )
}
