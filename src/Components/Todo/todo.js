import React from 'react';
import '../Todo/Todo.css';

const Todo = ({todoObj,setTodos,todos}) => {
    const deleteTodo = () =>{
       setTodos(todos.filter((item)=>{
    return item.id  !== todoObj.id
 }))
};

 const doneTodo = () =>{
    setTodos(todos.map((item)=>{
        return item.id  === todoObj.id ? {...item, isActive: !item.isActive} : item
 }))
};

const importantTodo = () =>{
    setTodos(todos.map((item)=>{
        return item.id  === todoObj.id ? {...item, isImportant: !item.isImportant} : item
 }))
};






    return (
        <ul className="todoList_tasks">
           <li className="todoList_task">
              <p className={`todolist_name 
              ${todoObj.isActive ? 'active' : 'done'}
             ${todoObj.isImportant ? 'important' : ""}
              ` }
              >{todoObj.todoname}</p>
               

            <div className="todoList_btns"> 

         
                  
                <button type='button'className={`btn btn-info ${todoObj.isActive ? '' : 'active'}`} onClick={doneTodo}>Done </button>
                <button type='button'className={`btn btn-warning ${todoObj.isImportant ? 'active' : ''}`}  onClick={importantTodo}>Important</button>
                <button type='button'className="btn btn-danger" onClick={deleteTodo}>Delete</button>
            </div>
        </li>
            
        </ul>
    );
};

export default Todo;