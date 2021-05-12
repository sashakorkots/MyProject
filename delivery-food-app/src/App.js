import './App.css';
import React, { useEffect } from 'react';
import { loadRestaurant } from './store/restaurant/actions';
import {useDispatch} from 'react-redux';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import RestaurantsList from './componets/RestaurantsList';



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRestaurant())
  },[])

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <h2>Restaurants</h2>
            <RestaurantsList />
          </Route>
          <Route path='/restaurant/:id' > 
            <h2>Restaurant menu</h2>
            <Link to={`/home`} className='link-back'><button>Повернутися до вибору ресторану</button></Link>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

