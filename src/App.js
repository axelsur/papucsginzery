import './App.css';
import "./style.css"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavbarPapucs from './components/NavBar';
import Footer  from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    
    <BrowserRouter>
        <NavbarPapucs/>
        <Routes>
          <Route path='/' element= {<ItemListContainer titulo="Lista Productos"/>} />     
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer titulo="Lista Productos Por Categoria"/>} />     
          {/* <Route path='/producto/:idProducto' element= {<ItemDetailContainer titulo="Vista del Detalle"/>} /> */}     
          <Route path='*' element= {<p>ERROR 404</p>} />     
        </Routes>
        <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
