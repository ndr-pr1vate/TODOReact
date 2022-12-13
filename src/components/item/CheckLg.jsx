import React from "react";
import {BsCheckLg} from 'react-icons/bs'

const CheckLg = ({isCompl, changeTodo, todoId}) => {
    return (
        <div className="item-bsCheckLg">
            <div className="area" onClick={() => changeTodo(todoId)}>
                {isCompl &&
                <BsCheckLg/>   
            }
            </div>

        </div>
    )
}

export default CheckLg;