import './CardProduct.scss'
import shoes from '../../assets/img/shoes.png'
import ItemCount from '../ItemCount/ItemCount';

export default function CardProduct() {
  return (
    <>
      <div className="custom-card">
        <img className="custom-card__thumbnail" src={shoes} alt="shoe" />
        <div className="px-2">
          <h5 className="custom-card__title">Nike Colours Power</h5>
          <h5 className="custom-card__price">$129</h5>
          <p className="custom-card__description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div>
            <ItemCount stock="5" />
          </div>
        </div>
      </div>
    </>
  );
}