import Navbar from "../../components/Navbar/Navbar"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

export default function Products() {
  return (
    <div>
      <Navbar />
      <h1>Listado de productos</h1>
      <ItemListContainer />
    </div>
  );
}
