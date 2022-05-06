import { Container } from "react-bootstrap";
import './ItemListContainer.scss';

export default function ItemListContainer({greeting}) {
  return (
    <Container className="list-container">
      <h5 className="mb-0">{greeting}</h5>
    </Container>
  )
}