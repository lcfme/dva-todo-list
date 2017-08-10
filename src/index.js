import React from 'react'
import dva from 'dva'
import { Router, Route } from 'dva/router'
import todoModel from './models/todoModel'
import App from './views/App'

const app = dva()

app.model(todoModel)






app.router(({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  )
})

// 5. Start
app.start('#root')
