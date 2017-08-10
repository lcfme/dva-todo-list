
export default {
  namespace: 'todos',
  state: [],
  reducers: {
    fetchAllTodolist(state, { data }) {
      return data
    },
    createTodo(state, { newTodo }) {
      return [
        ...state,
        newTodo
      ]
    },
    del(state, { id }) {
      return state.filter((item)=>{
        return item.id === id ? false : true
      })
    },
    changeDone(state, { id, done }) {
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done
          }
        }
        return item
      })
    }
  },
  effects: {
    fetchAllTodolistAsync: function* (action, { put }) {
       const data = yield fetch('/todos').then((data) => {
         return data.json()
       })
       console.log(data)
       yield put({
         type: 'fetchAllTodolist',
         data
       })
    },
    createTodoAsync: function* (action, { put }) {
      const newTodo = yield fetch('/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: action.title,
          done: false
        })
      }).then((data) => {
        return data.json()
      })
      yield put({
        type: 'createTodo',
        newTodo
      })
    },
    delAsync: function* (action, { put }) {
      yield fetch(`/todos/${action.id}`, {
        method: 'DELETE'
      })
      yield put({
        type: 'del',
        id: action.id
      })
    },
    changeDoneAsync: function* (action, { put }) {
      yield fetch(`/todos/${action.id}`, {
        method: 'PATCH',
        id: action.id,
        done: action.done
      })
      yield put({
        type: 'changeDone',
        id: action.id,
        done: action.done
      })
    }
  }
}
