import React from 'react';
import './header.css';

const Header = ({todos}) => {
   const more = todos.filter((item) =>{
     return !item.isActive
   }).length;

   const date = new Date();

 
   
    return (
        <header className="header">
          <h1 className="header__title">Todo list</h1>
           <h1>{date}</h1>
               { todos.length === 0 
               
               ? <p className="header__subtitle">Количество ваших заданий</p>
               :<p className="header__subtitle">Количество ваших заданий,Выполненных заданий {more} </p>
               }
        </header>
    );
};

export default Header;