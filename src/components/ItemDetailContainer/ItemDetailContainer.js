import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { products } from "../../data/products";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ title, productId }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem(products.find((item) => item.productId === productId));
  }, [productId]);

  return (
    <Container>
      <Row>{title}</Row>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  );
}
