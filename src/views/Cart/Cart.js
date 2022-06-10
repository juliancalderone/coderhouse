import React from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { Container, Row, Col } from "react-bootstrap";
import CartItem from "../../components/CartItem/CartItem";

export default function Cart() {
  const { cart } = React.useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
      <Container className="mt-4">
        {cart.length ? (
          <div>
            {cart.map((item) => <CartItem key={item.productId} item={item} />)}
          </div>
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
