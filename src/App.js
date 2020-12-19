import './App.css';

import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import NavBar from './components/navbar';
import Shop from './components/shop';
import ShoppingCart from './components/shopping-cart';
import About from './components/about';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Shop} />
          <Route path='/cart' component={ShoppingCart} />
          <Route path='/about' component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
