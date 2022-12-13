import React from "react";
import {AiFillDelete} from 'react-icons/ai'

const Delete = ({todoId, removeTodo}) => {
    return (
        <div className="deleteBtn" onClick={() => removeTodo(todoId)}>
            <span>
            <AiFillDelete />
            </span>
        </div>
    )
}

export default Delete;