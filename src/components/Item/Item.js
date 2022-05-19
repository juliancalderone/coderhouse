import { Link, useNavigate } from "react-router-dom";
import AddButton from "../AddButton/AddButton";
import "./Item.scss";

export default function Item({ item }) {
  
  const navigate = useNavigate();

  return (
    <div className="custom-card mb-3">
      <img className="custom-card__thumbnail" src={item.img} alt="product" />
      <div className="px-2">
        <h5 className="custom-card__title">{item.title}</h5>
        <h5 className="custom-card__price">${item.price}</h5>
        <p onClick={() => navigate(`/product/${item.productId}`)}>ver</p>
        <div>
          <AddButton />
        </div>
      </div>
    </div>
  );
}
