import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import { useParams } from "react-router-dom";
export default function Category() {
  const { categoryId } = useParams();
  console.log(categoryId);
  return (
    <div>
      <h1>Listado de productos</h1>
      <ItemListContainer categoryId={categoryId} />
    </div>
  );
}
