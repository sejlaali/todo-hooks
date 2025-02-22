import React, {useState, useEffect} from 'react';
import styled from 'styled-components'

const FormSection = styled.div`
    background: #eee;
    height: auto;
    padding: 30px 0
`;

const Heading = styled.h5`
    text-align: center;
    font-weight: bold
`;

const Input = styled.input`
    padding: 6px;
    border: none;
    width: 100%;
    margin: 20px auto;
    
    &::placeholder{opacity: 0.7; font-size: 0.9em}
`;

const Button = styled.button`
    background: ${props => props.isButtonActive ? '#00baba' : 'gray'};
    padding: 3px 10px;
    color: white;
    box-shadow: ${props => props.isButtonActive ? '3px 3px 10px 2px #aaa' : ''};
    border: none;
    transition: 0.16s all;
    
    &:hover,
    &:active{box-shadow: ${props => props.isButtonActive ? '3px 3px 10px 1px #aaa' : ''};
    
    &:active{box-shadow: none !important;}
`

const AddTodoSection = ({addTodo}) => {
    const [todoText, setTodoText] = useState('');
    const [isButtonActive, setIsButtonActive] = useState(false);

    const btnDisabled = isButtonActive ? false : true;

    useEffect(() => {
        if(todoText.length) {
            setIsButtonActive(true)
        } else{
            setIsButtonActive(false)
        }
    }, [todoText])

    const handleChange = (text) => {
        setTodoText(text)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todoText.length === 0) return;
        addTodo(todoText);
        setTodoText('')
    };


    return(
        <FormSection onSubmit={handleSubmit}>
           <div className="container">
               <Heading>Add Todos</Heading>
               <form>
                   <Input type='text' placeholder='What have you got planned?' value={todoText} onChange={(e) => handleChange(e.target.value)}/>
                   <Button type='submit' disabled={btnDisabled} isButtonActive={isButtonActive}>Add Todo</Button>
               </form>
           </div>
        </FormSection>
    )
};

export default AddTodoSection