import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../CardProduct/CardProduct";
import './ItemListContainer.scss';

export default function ItemListContainer({greeting}) {
  return (
    <Container className="list-container">
      {/* <h5 className="mb-0">{greeting}</h5> */}
      <Row>
        <Col lg="3" sm="12">
          <CardProduct />
        </Col>
      </Row>
    </Container>
  )
}