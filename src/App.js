import './App.css';

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';

import { CartProductsProvider } from './context/cartProducts';

import NavBar from './components/navbar';
import Shop from './components/shop';
import ShoppingCart from './components/shopping-cart';
import About from './components/about';
import ProductDetails from './components/product-details';

function App() {
  return (
    <CartProductsProvider>
      <Router>
        <div className='App'>
          <NavBar />
          <div className='mx-auto p-5'>
            <Switch>
              <Route path='/' exact component={Shop} />
              <Route path='/products' exact component={Shop} />
              <Route path='/products/:id' component={ProductDetails} />
              <Route path='/cart' component={ShoppingCart} />
              <Route path='/about' component={About} />
              <Redirect to='/' />
            </Switch>
          </div>
        </div>
      </Router>
    </CartProductsProvider>
  );
}

export default App;
