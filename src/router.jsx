import React from 'react';

import {BrowserRouter,Routes, Route} from 'react-router-dom';

import {Login} from './pages/login/Login';
import {Cadastro} from './pages/cadastro/Cadastro';
import {Home} from './pages/home/Home';
//import {Localizacao} from './pages/localizcao/Localizacao';

import {Navbar} from './navbar/Navbar';

export const Router=()=>{
  
  return(
     <BrowserRouter>
       <Navbar/>
<Routes>
     <Route path='/' element={<Home/>}/>
  
      <Route path='/login' element={<Login/>}/>
<Route path='/cadastro' element={<Cadastro/>}/>

</Routes>
</BrowserRouter>
  )
 
}
