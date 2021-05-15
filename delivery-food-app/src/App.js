import './App.css';
import React, { useEffect } from 'react';
import { loadRestaurant } from './store/restaurant/actions';
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import RestaurantsList from './componets/RestaurantsList';
import Menu from './componets/Menu'
import Backet from './componets/BasketList'
import {deleteOrder} from './store/order/orderSlice'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRestaurant())
  },[dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

