import './App.css';
import './components/ItemListContainer/ItemListContainer.css';
import './components/CartWidget/CartWidget.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer
    
    greeting="Bienvenidos a mi tienda!"
    
    />
    </div>
  );
}

export default App;
