import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';

import {Login} from './pages/login/Login';
import {Cadastro} from './pages/cadastro/Cadastro';
import {Home} from './pages/home/Home';
//import {Localizacao} from './pages/localizcao/Localizacao';

import {Navbar} from './navbar/Navbar';
import { Localizacao } from './pages/localizacao/Localizacao';
import { Chat } from './pages/chat/Chat';
import { Agenda } from './pages/agenda/Agenda';

export const Router=()=>{
  
  return(
     <BrowserRouter>
       <Navbar/>
<Routes>
     <Route path='/' element={<Home/>}/>
  
      <Route path='/login' element={<Login/>}/>
<Route path='/register' element={<Cadastro/>}/>
<Route path='/localization' element={<Localizacao/>}/>
<Route path='/agenda' element={<Agenda/>}/>
<Route path='/chat' element={<Chat/>}/>

</Routes>
</BrowserRouter>
  )
 
}
