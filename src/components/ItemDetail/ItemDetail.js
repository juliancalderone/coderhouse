import { Row, Col } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";

export default function ItemDetail({ item }) {
  return (
    <Row>
      <Col lg="5" className="mt-5">
        <img className="product-img" width={450} src={item.img} alt="product" />
      </Col>
      <Col lg="7" className="mt-5 d-flex flex-column align-items-start justify-content-between">
        <h2>Detalle del producto</h2>
        <h5 className="mt-3 mb-4">{item.title}</h5>
        <p>Precio: ${item.price}</p>
        <p className="w-75">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <div className="w-50">
          <AddButton />
        </div>
      </Col>
    </Row>
  );
}