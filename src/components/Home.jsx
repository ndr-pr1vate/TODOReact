import React, { useState } from "react";
import Delete from "./item/Delete";
import TodoItem from "./item/TodoItem";

const data = [
    {
        id: '1',
        task : 'Сходить на каток',
        priority : 'ASAP!',
        isCompl: false,
    },
    {
        id: '2',
        task : 'Купить батон',
        priority : 'important',
        isCompl: true,
    },
    {
        id: '3',
        task : 'Изучить основы html',
        priority : 'no matter',
        isCompl: false,
    }
]

const Home = () => {
    const [todos, setDone] = useState(data);

    const changeTodo = (id) => {
        const copyData = [...todos]
        const val = copyData.find(n => n.id === id)
        val.isCompl = !val.isCompl
        setDone(copyData)
    }

    const removeTodo = (id) => {
        const copyData = [...todos]
        setDone(copyData.filter(n => n.id !== id))
    }
    
window.addTodo = addTodo;
    return (
        <div className="home">
            <h1>TODO</h1>
            {data.map(todo => <TodoItem key={todo.id} todo={todo} changeTodo = {changeTodo} removeTodo={removeTodo}/>)}
        </div>
    )
}

export default Home