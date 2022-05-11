import React from "react";
import './ItemCount.scss';

export default function ItemCount({stock}) {

  const [count, setCount] = React.useState(1);

  const handleAdd = () => {
    if (count < stock) {
      setCount(count + 1)
    } else {
      alert("Ups! Solo tenemos 5 unidades!")
    }
  }
  
  const handleRest = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <span>Seleccione la cantidad</span>
        <div>
          <input
            className="custom-input"
            type="button"
            value="+"
            onClick={handleAdd}
          />
          <small>{count}</small>
          <input
            className="custom-input"
            type="button"
            value="-"
            onClick={handleRest}
          />
        </div>
      </div>
      <button className="btn-primary">Agregar al carrito</button>
    </>
  );
}
