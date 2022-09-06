import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/CartWidget/CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetail';

const App =() => {
  return (
    <div className="App">
    <NavBar/>

      <ItemDetailContainer/>
    

    </div>
  );
}

export default App;
