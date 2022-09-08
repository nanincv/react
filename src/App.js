import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/CartWidget/CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import About from './Views/About';



const App =() => {
  return (
    <BrowserRouter>
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path ='/about' element = {<About/>} />
      <Route path ='/tienda' element= {<ItemListContainer/>} />
      <Route path = '/producto/:id' element = {<ItemDetailContainer/> } />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
