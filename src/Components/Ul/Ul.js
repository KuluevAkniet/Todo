import React from 'react';
import Todo from '../Todo/todo'
import  './Ul.css';


const Ul = ({todos,setTodos,status,search}) => {
    return (
        <ul className='todolist'>
         {todos.filter((item)=>{
             switch(status){
                 case 'active':{
                     return item.isActive
               }
               case 'done' :{
                    return !item.isActive
               }
               default:
                   return item
            }

         }).filter((item)=>{
              return item.todoname.startsWith(search)
         }).map((item)=>{
              return <Todo todoObj={item} id={item.id}  todos={todos} setTodos={setTodos}  />
         })}
    </ul>
    );
};

export default Ul;