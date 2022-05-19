import React, { useEffect } from "react";
import "./AddButton.scss";

export default function AddButton() {
  
  const [count, setCount] = React.useState(1);
  const stock = 5;

  useEffect(() => {
    if (count !== 1) {
      alert("Stock modificado")
    }
  }, [count]);

  const onAdd = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const onSubmit = () => {
    alert(`Se agregaron ${count} unidades`)
  };

  const StockButton = ({ handleOnClick, text }) => {
    return (
      <button
        className="custom-btn"
        onClick={() => handleOnClick()}
      >
        {text}
      </button>
    );
  };

  const AddButton = ({ handleOnSubmit }) => {
    return (
      <button className="btn-primary" onClick={() => handleOnSubmit()}>
        Agregar al carrito
      </button>
    );
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <span>Seleccione la cantidad</span>
        <div>
          <StockButton text="-" handleOnClick={onDecrease} />
          <small>{count}</small>
          <StockButton text="+" handleOnClick={onAdd} />
        </div>
      </div>
      <AddButton handleOnSubmit={onSubmit} />
    </>
  );
}
