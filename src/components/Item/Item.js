import './Item.scss'
import ItemCount from '../ItemCount/ItemCount';

export default function Item({product}) {
  return (
    <>
      <div className="custom-card">
        <img
          className="custom-card__thumbnail"
          src={product.img}
          alt="product"
        />
        <div className="px-2">
          <h5 className="custom-card__title">{product.title}</h5>
          <h5 className="custom-card__price">${product.price}</h5>
          {/* <p className="custom-card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p> */}
          <div>
            <ItemCount stock="5" />
          </div>
        </div>
      </div>
    </>
  );
}