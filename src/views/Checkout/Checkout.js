import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import {
  getFirestore,
  collection,
  addDoc,
  runTransaction,
  doc
} from "firebase/firestore";

export default function Checkout() {
  const { cart, getTotal } = React.useContext(CartContext);

  const [data, setData] = useState();
  const [orderId, setOrderId] = React.useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const order = {
      buyer: data,
      items: cart,
      total: getTotal(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      updateProducts()
    });
  };

  const updateProducts = async () => {
    const db = getFirestore();
    cart.forEach(async (item) => {
      const itemRef = doc(db, `items`, item.id);
      await runTransaction(db, async (transaction) => {
        const transfDoc = await transaction.get(itemRef);
        if (!transfDoc.exists()) {
          console.error("El documento no existe");
        }
        const newStock = transfDoc.data().stock - item.quantity;
        transaction.update(itemRef, { stock: newStock });
      });
    });
  };

  return (
    <div>
      <Container>
        <form onSubmit={handleSubmit}>
          <h1>Checkout</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
          />
          <input type="submit" value="Finalizar compra" />
        </form>
      </Container>
    </div>
  );
}
