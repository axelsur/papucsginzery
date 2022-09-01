import { createContext, useState } from 'react';
export const myContext = createContext();

export default function CartContext({ children }) {

    // Cantidad a agregar al carrito
    const [cant, setCant] = useState(0);

    //Opcion de mostrar Boton de Finalizar Compra en ItemDetail
    const [hideButton, setHideButton] = useState(false);

    // Arreglo de productos del carrito
    const [cart, setCart] = useState([]);

    // Producto (Objeto JSON) que se va a agregar al carrito
    const [itemCart, setItemCart] = useState({})

    //Cantidad total de productos en el carrito para mostrar en el widget
    const [cantidadTotal, setCantidadTotal] = useState(0)

    //Verifica si hay productos para el widget navbar.
    const [hayProductos, setHayProductos] = useState(false)

    const [precioTotal, setprecioTotal] = useState(0)


    // Verifica si el item esta en el carrito.
    const isInCart=(itemCart,cart)=>
    {
        if(cart.find( producto => producto.id == itemCart.id) != undefined)
           return true;
        else
        {
          return false;
        }

    }


    // Agregar item al carrito.
    const addItem=(itemCart,quantity)=>
    {
       let auxItem={}
       //Si el producto está agregado al carrito, se suma la cantidad a la existente.
       if (isInCart(itemCart,cart))
        {
          for(let i = 0; i < cart.length; i++) {
            if (cart[i].id === itemCart.id)
              cart[i].cantidad+=quantity
            }
            console.log("repetido")
            console.log(cart)
        }
       //Si el producto no está agregado al carrito, se lo agrega
        else
        {
            auxItem=
            {
                id:itemCart.id,
                imagen: itemCart.img,
                nombre:itemCart.nombre,
                tipo: itemCart.tipo,
                precio: itemCart.precio,
                cantidad: cant
            }
            cart.push(auxItem)
        }
        let cantAux=0
        cart.forEach(producto => {
          cantAux += producto.cantidad
          });
        setCantidadTotal(cantAux)
    }


    //Vaciar Carrito.
    const clearCart=()=>
    {
      for(let i = 0; i < cart.length; i++) {
            cart.pop();
        }
        setHayProductos(false)
        setprecioTotal(0)
        setCantidadTotal(0)
        

    }

    //Elimina un producto del carrito.
    const removeItem=(item)=>
    {
      for(let i = 0; i < cart.length; i++) {
        if(cart[i].id == item.id)
          {
            setCantidadTotal(cantidadTotal - cart[i].cantidad)
            cart.splice(i,1)
          }
      }
      if (cart.length==0)
            setHayProductos(false)
            

    }



  return (
    <>
      <myContext.Provider value={{cant, setCant, hideButton, precioTotal, setprecioTotal, 
                                  setHideButton, cart, setCart, itemCart, 
                                  setItemCart, cantidadTotal, setCantidadTotal, 
                                  hayProductos, setHayProductos, addItem, removeItem, clearCart}}>{children}</myContext.Provider>
    </>
  );
}