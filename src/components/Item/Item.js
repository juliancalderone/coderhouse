import { useNavigate } from "react-router-dom";
import AddButton from "../AddButton/AddButton";
import "./Item.scss";

export default function Item({ item }) {
  
  const navigate = useNavigate();

  return (
    <div className="custom-card mb-3">
      <div className="custom-card__img-wrapper">
        <img className="thumbnail" src={item.img} alt="product" />
        <div
          onClick={() => navigate(`/product/${item.productId}`)}
          className="see-detail d-flex align-items-center justify-content-center"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt="see-detail"
          />
        </div>
      </div>
      <div className="px-2">
        <h5 className="custom-card__title">{item.title}</h5>
        <h5 className="custom-card__price">${item.price}</h5>
        <div>
          <AddButton />
        </div>
      </div>
    </div>
  );
}
