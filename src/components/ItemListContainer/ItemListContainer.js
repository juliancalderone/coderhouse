import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { products } from "../../data/products";
import ItemList from "../ItemList/ItemList";
import './ItemListContainer.scss';

export default function ItemListContainer({title, categoryId}) {

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

  const [items, setItems] = useState([]);

  useEffect(() => {
    if(categoryId) {
      setItems(products.filter(item => item.categoryId === +categoryId))
    }
    else {
      setItems(products)
    }
  }, [categoryId])

  return (
    <Container className="list-container">
      <Row>
        <ItemList items={items} />
      </Row>
    </Container>
  );
}