import './App.css';
import "./style.css"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import NavbarPapucs from './components/NavBar';
import Footer  from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContext from './components/CartContext';
import Cart from './components/Cart';

function App() {
  return (
    <CartContext>
    <BrowserRouter>
        <NavbarPapucs/>
        <Routes>
          <Route path='/' element= {<ItemListContainer titulo="Lista Productos"/>} />     
          <Route path='/categoria/:idCategoria' element= {<ItemListContainer titulo="Lista Productos Por Categoria"/>} />     
          <Route path='/producto/:idProducto' element= {<ItemDetailContainer/>} />
          <Route path='/cart' element= {<Cart titulo="Carrito de compras"/>} />        
          <Route path='*' element= {<p>ERROR 404</p>} />     
        </Routes>
        <Footer/>
    </BrowserRouter>
    </CartContext>
  );
}

export default App;
