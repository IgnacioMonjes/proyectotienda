import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
      <div className="App">
        <ItemListContainer greeting='Arcilla con Prop'/>
        <Navbar />
      </div>
  );
}


export default App;


