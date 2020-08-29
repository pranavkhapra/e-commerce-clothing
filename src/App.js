import React from 'react';
import HomePage from './pages/homepage/HomePage'
import {Route} from 'react-router-dom'
import './App.css'
function App() {
  return (
   <div>
     <Route exact path="/" component={HomePage}>
     </Route>
     
   </div>
  );
}

export default App;
