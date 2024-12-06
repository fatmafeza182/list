import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { IoIosRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";

function Form({ todo, onRemoveTodo, OnUpdateTodo }) {
    const { id, content } = todo;
    const [newTodo, setNewTodo] = useState(content);
    const [editable, setEditable] = useState(false);
    const removeTodo = () => {
        onRemoveTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        OnUpdateTodo(request)
        setEditable(false);
    }
    return (
        <div className='form-input'>
            <div style={{ width: '700px' }} >{
                editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='input-todo' type='text' /> : content
            }
            </div>
            <div className='icons'>
                <IoIosRemoveCircle onClick={removeTodo} style={{ color: 'red' }} />
                {
                    editable ? <FaCheck style={{ color: 'blue' }} onClick={updateTodo} /> : <CiEdit style={{ color: 'blue' }} onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default Form