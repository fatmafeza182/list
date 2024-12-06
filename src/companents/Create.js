import React, { useState } from 'react'


function Create({ onCreateTodo }) {
    const [newTodo, setNewTodo] = useState("");

    const createTodo = () => {
        if (!newTodo) return;
        const request = {
            id: Math.floor(Math.random() * 999999999999),
            content: newTodo
        }
        onCreateTodo(request);
        setNewTodo('');


    }
    return (
        <div>
            <div className='input'>
                <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='input-todo' type='text' placeholder='Todo Giriniz' ></input>
                <button onClick={createTodo} className='input-button'>ekle</button>
            </div>
        </div>
    )
}

export default Create