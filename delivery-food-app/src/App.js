import './App.css';
import React, { useEffect } from 'react';
import { loadRestaurant } from './store/restaurant/actions';
import {useDispatch} from 'react-redux'
import RestaurantsList from './componets/RestaurantsList'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadRestaurant())
  },[])

  return (
    <div className="App">
      <h2>Restaurants</h2>
      <RestaurantsList />
    </div>
  );
}

export default App;
