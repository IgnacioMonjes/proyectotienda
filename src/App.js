import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <div className="App">
        <ItemListContainer greeting='Saludo con Prop'/>
        <Navbar />
      </div>
  );
}


export default App;


