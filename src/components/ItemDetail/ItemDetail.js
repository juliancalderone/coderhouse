import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import AddButton from "../AddButton/AddButton";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext"


export default function ItemDetail({ item }) {
  const {title, price, img, id, stock} = item
  const { addToCart } = React.useContext(CartContext);

  const [count, setCount] = useState(1);
  const [purchase, setPurchase] = useState(false);
  const navigate = useNavigate();

  const onAdd = () => {
    const prod = {
      id,
      title, 
      img,
      price,
      stock,
      quantity: count
    }
    addToCart(prod)
    setPurchase(true);
  };

  return (
    <Row>
      <Col lg="5" className="mt-5">
        <img className="product-img" width={450} src={item.img} alt="product" />
      </Col>
      <Col
        lg="7"
        className="mt-5 d-flex flex-column align-items-start justify-content-between"
      >
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
          {purchase ? (
            <button className="btn-secondary" onClick={() => {navigate('/cart')} }>Ir al carrito</button>
          ) : (
            <AddButton count={count} setCount={setCount} stock={item.stock} onSubmit={onAdd}/>
          )}
        </div>
      </Col>
    </Row>
  );
}
