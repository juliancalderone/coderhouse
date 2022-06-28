import React from "react";
import "./CartItem.scss";
import { Table } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart } = React.useContext(CartContext);
  return (
    <div className="cart-item">
      <Table>
        <thead>
          <tr>
            <th className="cart-item__product">Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
            {/* <th>Acciones</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="d-flex align-items-center">
              <img
                className="cart-item__thumbnail"
                src={item.img}
                alt="product"
              />
              <p>{item.title}</p>
            </td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
            <td>{item.price * item.quantity}</td>
            {/* <td>
              <div
                className="cursor-pointer d-flex"
                onClick={() => {
                  removeFromCart(item.id);
                }}
              >
                <p className="mb-0 mx-2">Eliminar</p>
                <img
                  src="https://cdn-icons.flaticon.com/png/512/3177/premium/3177276.png?token=exp=1656390738~hmac=eba16aa9bcd864efc49780c510961c7a"
                  alt=""
                  height={20}
                  width={20}
                />
              </div>
            </td> */}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default CartItem;
