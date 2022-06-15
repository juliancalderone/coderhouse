import React, { useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore"
import { Container, Row } from "react-bootstrap";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer({ title, productId }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    const db = getFirestore()
    const itemRef = doc(db, "items", productId)
    getDoc(itemRef).then((snapshot) => {
      setItem({id: snapshot.id, ...snapshot.data()})
    })
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
