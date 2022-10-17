import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/CartWidget/CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './Views/Checkout';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


const App =() => {
  return (
     <CartContextProvider>
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <div>
    <Header/>
    </div>
    <Routes>
      <Route path ='/checkout' element = {<Checkout/>} />
      <Route path ='/tienda' element= {<ItemListContainer/>} />
      <Route path = '/producto/:id' element = {<ItemDetailContainer/> } />
      <Route path = '/cart' element = {<Cart/> } />
      <Route path='/lines/:categoryid' element={<ItemListContainer />}/>
    </Routes>
    </div>
    <div>
    <Footer/>
    </div>
    </BrowserRouter>
  </CartContextProvider>
  

  );
}

export default App;
