import { Button } from "./Button";

//SCSS STYLE
import "./scss/card.scss";

export const Card = ({ item, cart, setCart }) => {
  return (
    <div className="card">
      {item && (
        <>
          <div className="img_card">
            <Button item={item} cart={cart} setCart={setCart} />
            {item.bestseller && <p className="best_seller">Best Seller</p>}
          </div>

          <figure>
            <img src={item.image.src} alt={item.image.alt} />
          </figure>

          <div className="info_card">
            <p className="category">{item.category}</p>
            <h3>{item.name}</h3>
            <p className="price">
              {item.price}
              <span>€</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};
