import React from 'react';
import HomePage from './pages/homepage/HomePage'
import ShopPage from './pages/shop/ShopPage'
import {Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
   <div>
     <Route exact path="/" component={HomePage}/>
     <Route path="/shop" component={ShopPage}/>
   </div>
  );
}

export default App;
