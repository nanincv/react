import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/CartWidget/CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemListContainer/ItemListContainer';


const App =() => {
  return (
    <div className="App">
    <NavBar/>
    <ItemDetailContainer/>
    </div>

  );
}

export default App;
