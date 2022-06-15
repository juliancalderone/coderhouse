import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import './ItemListContainer.scss'
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"

export default function ItemListContainer({title, categoryId}) {

  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore()

    if (categoryId) {
      const itemsByCategory = query(
        collection(db, "items"),
        where("categoryId", "==" ,categoryId)
      )
      getDocs(itemsByCategory).then((snapshots) => {
        if (snapshots.size === 0) {
          console.error("No hay productos")
        }
        setItems(snapshots.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      })
    } else {
      const itemsCollection = collection(db, "items")
      getDocs(itemsCollection).then((snapshots) => {
        if (snapshots.size === 0) {
          console.error("No hay productos")
        }
        setItems(snapshots.docs.map(doc => ({id: doc.id, ...doc.data()})))
      });
    }
    

  }, [categoryId])

  return (
    <Container className="list-container">
      <Row>
        <h5 className="mb-4">Listado de productos por categoría: {categoryId || 'Todos'}</h5>
        <ItemList items={items} />
      </Row>
    </Container>
  );
}