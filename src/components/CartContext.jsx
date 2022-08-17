import { createContext, useState } from 'react';
export const myContext = createContext();

export default function CartContext({ children }) {

    const [cant, setCant] = useState(0);

    const [hideButton, setHideButton] = useState(false)


  return (
    <>
      <myContext.Provider value={{cant, setCant, hideButton, setHideButton}}>{children}</myContext.Provider>
    </>
  );
}