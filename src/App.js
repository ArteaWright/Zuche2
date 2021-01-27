import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Shop from './Pages/Shop';
import './App.css';

function App() {
  return (
   <>
   <Router>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/shop" component={Shop}/>
     </Switch>
   </Router>

   </>
  );
}

export default App;
