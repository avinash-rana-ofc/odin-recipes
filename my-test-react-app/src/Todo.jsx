import React from 'react'

const Todo = () => {
    const todos = [
        {task : 'mow the yard', id : crypto.randomUUID()},
        {task : 'Wow on Odin Projects', id : crypto.randomUUID()},
        {task : 'Feed the cat', id : crypto.randomUUID()},
    ]
  return (
    <ul>
        {todos.map(todo => <li key={todo.id}>{todo.task}</li>)}
    </ul>
  )
}

export default Todo
