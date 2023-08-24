import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer greeting={"Bienvenidos a tu centro de compras favorito"}/>
    </>
  )
}

export default App