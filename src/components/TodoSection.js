import React from 'react'
import styled from 'styled-components'
import TodoList from './TodoList'

const TDS = styled.div` 
    margin-bottom: 80px
`;

const CTButton = styled.button`
    // CTButton is ClearTodoButton
    background: none;
    padding: 5px 10px;
    color: #f1a9a0;
    float: right;
    border: 1px solid #f1a9a0;
    transition: 0.2s all
    
    &:hover,
    &:active{
        color: white;
        background: red;
        border-color: red
    }
`;

const TodoSection = ({todos, deleteTodo, clearTodos}) => {

    const handleClearTodos = () => {
        let confirmClear = window.confirm("Are you sure you want to clear all todos?");
        if (!confirmClear) return;
        clearTodos()
    };

    if (!todos || todos.length === 0) {
        return(
            <div  className={`text-center`}>
                <h4>No todos</h4>
                <p>Use the form to add a new todo</p>
            </div>
        )
    }

    return(
        <TDS>
            {todos && todos.map(todo => {
                return <TodoList todo={todo} deleteTodo={deleteTodo} key={todo.id}/>
            })}
            { (todos.length > 1) && <CTButton onClick={handleClearTodos}>Clear All Todos</CTButton> }
        </TDS>
    )
};

export default TodoSection
