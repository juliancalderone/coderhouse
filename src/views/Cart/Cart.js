import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";

export default function Cart(item) {
  const { cart, getTotal, deteleAll } = React.useContext(CartContext);
  const navigate = useNavigate();
  
  return (
    <div>
      <Container className="mt-4">
        {cart.length > 0 ? (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-4 mt-4">Productos agregados al carrito</h5>
              <div>
                <Link className="mb-4 mx-4" to="/">
                  Seguir comprando
                </Link>
                <button
                  className="btn-danger text-white border-none"
                  onClick={() => {
                    deteleAll()
                  }}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
            <div className="btn-wrapper d-flex align-items-center justify-content-between w-100">
              <h5>
                Total compra: <strong>${getTotal()}</strong>
              </h5>
              <button
                className="btn-primary"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Finalizar compra
              </button>
            </div>
          </>
        ) : (
          <Row>
            <Col lg="5">
              <div className="d-flex flex-column">
                No hay items en tu carrito
                <button
                  className="btn-primary w-50 mt-4"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Ir a productos
                </button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}
