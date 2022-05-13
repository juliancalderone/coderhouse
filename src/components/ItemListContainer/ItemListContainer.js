import { Col, Container, Row } from "react-bootstrap";
import { products } from "../../data/products";
import Item from "../Item/Item";
import './ItemListContainer.scss';

export default function ItemListContainer() {

  const getProducts = new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 3000)
  })

  getProducts.then((result) => {
    console.log(result)
  }, err => {
    console.log(err)
  }).catch((err) => {
    console.log(err)
  })

  return (
    <Container className="list-container">
      <Row>
        {products.map((product, index) => (
          <Col lg="3" sm="12" key={index}>
            <Item product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}