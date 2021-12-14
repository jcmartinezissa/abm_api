
import { useState, usesEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Home from './Home/Home';
import VistaUsuario from './VistaUsuario/VistaUsuario';
import Usuarios from './Usuarios/Usuarios';
import Usuario from './Usuario/Usuario';

function App() {
  const [Ulogin, setULogin] = useState( {
    "createdAt": "2021-10-27T05:22:32.555Z",
    "name": "Cathy Ward",
    "avatar": "https://cdn.fakercloud.com/avatars/sunshinedgirl_128.jpg",
    "email": "Dawson_Weimann37@yahoo.com",
    "direccion": "Northeast",
    "tel": "654-927-8384",
    "id": "1"
   }); 
  
  return (

    <Router>
      <Header user={Ulogin}/>
      <Switch>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route  exact path='/usuarios'>
          <Usuarios />
        </Route>
        <Route path='/usuario/:id'>
          <Usuario />
        </Route>
        
        <Route path='/vistausuario/'>
          <VistaUsuario />
        </Route>   

      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
