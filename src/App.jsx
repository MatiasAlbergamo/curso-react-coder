import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemDetailContainer from "./components/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"
import Carrito from "./components/Carrito"

const App = () => {
  return (
    <BrowserRouter>

      <NavBar />

      <Routes>

      <Route exact path="/carrito" element={<Carrito/>} />
      <Route exact path="/" element={<ItemListContainer/>} />
      <Route path="/categoria/:categoria" element={<ItemListContainer/>} />
      <Route exact path="/Item/:id" element={<ItemDetailContainer/>} />

      </Routes>
    
    </BrowserRouter>
  )
}

export default App