import React from 'react';
import style from './style.css';

export const Login=()=>{
  return(
    <div className="login">
      <p>Faça login para acessar a plataforma</p>
      <form>
        <label>Name</label>
      <input placeholder='digite seu nome' type="text"/>
      <br/>  <br/>
       <label>Email</label>
       <input type="text" placeholder='digite seu emaiç'/>
        <br/>  <br/>
      <button>Confirmar</button>
        
      <span>Esqueceu senha</span>
        </form>
       
    </div>
  )
}