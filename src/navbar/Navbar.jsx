import React from 'react'
import style from './style.css';

import { Link } from 'react-router-dom';
export const Navbar =()=>{
  return(
    <div className='navbar'>
      <Link to="/">
        
       <p>Home</p>
      </Link>
     <Link to="register">
       <p>Cadastro</p>
      </Link>
      
       <Link to="login">
       <p>Login</p>
      </Link>
      
      <Link to="localization">
       <p>Localização</p>
      </Link>

      <Link to="chat">
       <p>Chat</p>
      </Link>

      <Link to="agenda">
       <p>Agenda</p>
      </Link>
    </div>
  )
}