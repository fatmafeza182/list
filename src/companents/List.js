import React from 'react'
import Form from './Form'

function List({ todos, onRemoveTodo, OnUpdateTodo }) {
    return (
        <div>
            {
                todos && todos.map((todo) => {
                    return <Form key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} OnUpdateTodo={OnUpdateTodo} />
                })
            }

        </div>
    )
}

export default List