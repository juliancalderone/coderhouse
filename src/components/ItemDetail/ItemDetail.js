import { Container } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";

export default function ItemDetail({ item }) {
  return (
    <Container>
      <h1>detalle del producto</h1>
      <p>{item.title}</p>
      <p>{item.price}</p>

      <AddButton />
    </Container>
  );
}
