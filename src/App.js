import logo from './logo.svg';
import './App.css';
import "./style.css"

import NavbarPapucs from './components/NavBar';
import Footer  from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavbarPapucs/>
      <h2 className="text-center">Pagina React</h2>
      <ItemListContainer titulo={"Lista Productos"}/>
      <Footer/>
    </>
  );
}

export default App;
