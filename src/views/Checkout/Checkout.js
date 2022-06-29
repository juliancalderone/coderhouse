import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import CartItem from "../../components/CartItem/CartItem";
import Lottie from "lottie-react";
import order from "../../assets/img/order.json"

import {
  getFirestore,
  collection,
  addDoc,
  runTransaction,
  doc,
} from "firebase/firestore";

export default function Checkout(notify) {
  const { cart, getTotal, deteleAll } = React.useContext(CartContext);
  const [data, setData] = useState();
  const [orderId, setOrderId] = React.useState();
  const [disable, setDisable] = React.useState(true);
  const [hideForm, setHideForm] = React.useState(true);

  useEffect(() => {
    if (cart.length > 0) {
      setDisable(false);
    }
  }, [cart]);

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
      date: new Date(),
    };
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    await addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      updateProducts();
      setHideForm(false);
      deteleAll();
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
        <div className="mt-4 mb-5">
          <h5>Checkout</h5>
          {hideForm ? (
            <Row className="mt-4">
              <Col lg="5" sm="12">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="fullname">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control
                      required
                      onChange={handleChange}
                      type="text"
                      name="fullname"
                      placeholder="Ingrese su nombre completo"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      required
                      name="email"
                      onChange={handleChange}
                      type="email"
                      placeholder="Ingrese su email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control
                      required
                      name="phone"
                      onChange={handleChange}
                      type="text"
                      placeholder="Ingrese su número"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                      required
                      onChange={handleChange}
                      type="text"
                      name="address"
                      placeholder="Ingrese su dirección"
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-end w-100 mt-4">
                    <input
                      className="btn-primary w-50"
                      type="submit"
                      value="Finalizar compra"
                      disabled={disable}
                    />
                  </div>
                </Form>
              </Col>
              <Col lg="7" sm="12">
                <div className="w-100">
                  {cart.map((item, index) => (
                    <CartItem key={index} item={item} />
                  ))}
                </div>
                <h5>
                  Total compra: <strong>${getTotal()}</strong>
                </h5>
              </Col>
            </Row>
          ) : (
            <div>
              <h5>Orden generada exitosamente!</h5>
              <Lottie className="order-animation" animationData={order} loop={false} />
              <p>Orden: {orderId}</p>
              <p>
                En breve nos comunicaremos para coordinar el pago y la entrega.
              </p>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
