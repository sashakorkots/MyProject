import './App.css';
import React, { useEffect } from 'react';
import { loadRestaurant } from './store/restaurant/actions';
import {useDispatch, useSelector} from 'react-redux';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import RestaurantsList from './componets/RestaurantsList';
import Menu from './componets/Menu'
import Backet from './componets/BasketList'
import Register from './componets/Register' 
import Login from './componets/Login'
import {toRegister} from './store/path/pathSlice'



function App() {
  const dispatch = useDispatch()
    
  useEffect(() => {
    dispatch(loadRestaurant())
  },[dispatch])

  return (
    <div className="App">
      
      <BrowserRouter >
          <Route path='/'>
          <Link to={`/register`} className='link-register' onClick={_ => dispatch(toRegister())}><button>Реєстрація і логін</button></Link>
          <h2 className='header'>Сервіс доставки їжі</h2>
          </Route>                    
          <Route path="/register">
            <h2>Register</h2>
            <Register />
            <h2>Login</h2>
            <Login />            
          </Route>
          <Route path="/home">
            <h2>Restaurants</h2>
            <RestaurantsList />
          </Route>
          <Route path='/restaurant/:id' >
            <div className='make-order'> 
              <Menu />
              <Backet />
            </div>
            <Link to={`/home`} className='link-back'><button>Повернутися до вибору ресторану</button></Link>
          </Route>        
      </BrowserRouter>
    </div>
  );
}

export default App;

