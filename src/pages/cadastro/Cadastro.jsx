import React from 'react';
import style from './style.css';

export const Cadastro=()=>{
  return(
    <div className="cadastro">
      <p>Faça o cadastro colaborare comm a comunidade</p>

      <form>
      <label>Informe seu nome completo</label>
      <input required placeholder='digite seu nome' type="text"/>
      <br/> <br/>
      
        <label>Informe seu email</label>
       <input required  type="text" placeholder='digite seu email'/>
       <br/> <br/>
        
        <label>Escolha sua senha</label>
       <input required  type="password" placeholder='digite seu senha'/>
       <br/> <br/>
      
        <label>Confirme sua senha</label>
        <input required  type="password" placeholder='confrime sua senha'/>
       <br/> <br/>
      
        <label>Informe seu número</label>
       <input required  type="number" placeholder='digite seu telefone'/>
       <br/> <br/>
      
        <label>Envei seu documento</label>
      
       <input required  type="file" placeholder='envie seu documento'/>
       <br/> <br/>
      
      <button>Confirmar</button>
      <span>Esqueceu senha</span>
        </form>
    </div>
  )
}