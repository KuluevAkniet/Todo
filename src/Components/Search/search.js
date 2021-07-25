import React from 'react';
import './search.css';
const Search = ({setStatus,setSearch}) => {

    const Handler = (e) =>{

      setStatus(e.target.value)
    }
    const Searchhandler = (e) =>{
         setSearch(e.target.value) 
    }

    return (
        <div className="search">
                     <input type="text" placeholder="search todo" className="search_input" onChange={Searchhandler}/>
                     <div className="search_btns">
                         <button type='button'className="search_btn btn btn-secondary" value='all' onClick={Handler}>All</button>
                         <button type='button'className="search_btn btn btn-success "value='active'onClick={Handler}>Active</button>
                         <button type='button'className="search_btn btn btn-warning "value='done'onClick={Handler}>Done</button>
                     </div>
                 </div>
    );
};

export default Search;