import React from 'react'
import style from './style.css';

import { Link } from 'react-router-dom';
export const Navbar =()=>{
  return(
    <div className='navbar'>
      <Link to="/">
        
       <p>Home</p>
      </Link>
     <Link to="/cadastro">
       <p>Cadastro</p>
      </Link>
      
       <Link to="login">
       <p>Login</p>
      </Link>
      
      {/* <Link to="localizacao">
       <p>Localização</p>
      </Link>
        */}
    </div>
  )
}