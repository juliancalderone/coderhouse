import Item from "../Item/Item";
import { Col, Row } from "react-bootstrap";

export default function ItemList({ items }) {
  return (
    <Row>
      {items.map((item, index) => (
        <Col lg="3" sm="12" key={index}>
          <Item key={item.id} item={item} />
        </Col>
      ))}
    </Row>
  );
}
