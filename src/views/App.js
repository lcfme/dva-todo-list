import React, { Component } from 'react'
import { connect } from 'dva'
import TodoItem from './TodoItem'

export default connect(({ todos }) => ({
  todos,
}))(class App extends Component {
  constructor(props) {
    super()
  }

  componentWillMount() {
    this.props.dispatch({
      type: 'todos/fetchAllTodolistAsync'
    })
  }

  render() {
    return (
      <div>
        <h1>{ JSON.stringify(this.props.todos) }</h1>
        <div>
          <input type="text" ref="input_add_title"/><button onClick={()=>{this.props.dispatch({
            type: 'todos/createTodoAsync',
            title: this.refs.input_add_title.value
          })}}>添加</button>
        </div>
        <div>{
          this.props.todos.map((item)=>{
            return (
              <TodoItem
                key={item.id}
                title={item.title}
                done={item.done}
                id={item.id}
                dispatch={this.props.dispatch}
              />
            )
          })
        }</div>
      </div>
    )
  }

})
