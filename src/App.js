import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/CartWidget/CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './Views/About';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';



const App =() => {
  return (
     <CartContextProvider>
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path ='/about' element = {<About/>} />
      <Route path ='/tienda' element= {<ItemListContainer/>} />
      <Route path = '/producto/:id' element = {<ItemDetailContainer/> } />
      <Route path = '/cart' element = {<Cart/> } />
    </Routes>
    </div>
    </BrowserRouter>
  </CartContextProvider>

  );
}

export default App;
