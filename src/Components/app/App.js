import React,{useState} from 'react';
import  './App.css';
import Header from '../Header/header';
import Search from '../Search/search';
import Ul from '../Ul/Ul';
import Form from '../Form';
import "bootswatch/dist/sketchy/bootstrap.min.css";


const App = () => {
    const [todos,setTodos] = useState([]);
    const [todotext,setTodotext] = useState([]);
    const [status,setStatus] = useState('all');
    const [search,setSearch] = useState('')
    return (
        <div className="todo">
             <div className="todo-container">
                <Header todos={todos}/>
                <Search status={status} setStatus={setStatus} setSearch={setSearch}/> 
                {todos.length === 0 && status === 'all'
                 ? <p>Здесь будут ваши задания</p>
                 : todos.filter((item) =>{
                     return item.isActive
                 }).length === 0 && status === 'active'
                 ? <p>Здесь будут ваши активные задания</p>
                 : todos.filter((item) =>{
                    return item.isActive
                }).length === 0 && status === 'done'
                ? <p>Здесь будут ваши сделанные задания</p>
                 : <Ul search={search} status={status} setTodos={setTodos} todos={todos}/>
                 }
                <Form  todotext={todotext}setTodotext={setTodotext} todos={todos}setTodos={setTodos}/>
             </div>
        </div>
    );
};

export default App;