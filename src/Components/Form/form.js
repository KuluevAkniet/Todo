import React from 'react';
import './form.css';
const form = ({todos,setTodos,todotext,setTodotext}) => {
    const form = (e) =>{
        e.preventDefault();
         setTodos([...todos,{
             todoname:todotext,
             isActive: true,
             isImportant:false,
             isChange:false,
             id: Math.floor(Math.random() * 1000)
         }]);
         setTodotext('')
    }
    const inputHadler = (e)=>{
        setTodotext(e.target.value)
    }
    return (
        <form action="" className="addtodo" onSubmit={form}>
            <input required type="text" placeholder="what needs to be" className="input__todo" onChange={inputHadler} value={todotext}/>
           <button type="submit" className="addtodo_btn">Add todo</button>
       </form> 
    );
};

export default form;