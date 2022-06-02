import React from "react";
import "./AddButton.scss";

export default function AddButton({count, setCount, onAdd, onSubmit, stock}) {

  const onIncrease = () => {
    console.log({ count });
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onDecrease = () => {
    if (count > 1) {
      setCount(count - 1);
    }
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

  const AddButton = ({text, handleOnSubmit}) => {
    return (
      <button className="btn-primary" onClick={() => handleOnSubmit()}>
        {text}
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
          <StockButton text="+" handleOnClick={onIncrease} />
        </div>
      </div>
      <AddButton text="Agregar al carrito" handleOnSubmit={onSubmit} />
    </>
  );
}
