import React from "react";
import Task from "./Task";
import CheckLg from "./CheckLg";
import Priority from "./Priority";
import Delete from "./Delete";

const TodoItem = ({todo, changeTodo, removeTodo}) => {
    return (
        <div className="todoItem">
            <CheckLg isCompl={todo.isCompl} changeTodo = {changeTodo} todoId={todo.id} />
            <div className="task-text">
            {todo.task}
            </div>
            <Priority priority={todo.priority}/>
            <Delete todoId={todo.id} removeTodo={removeTodo} />
        </div>
    )
}

export default TodoItem;