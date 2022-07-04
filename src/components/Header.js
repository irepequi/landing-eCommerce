//COMPONENTS
import { Button } from "./Button";

//SCSS STYLE
import "./scss/header.scss";

export const Header = ({ dataOnePage, cart, setCart }) => {
  return (
    <>
      {dataOnePage ? (
        <header>
          <div className="cart-bar">
            <h1>{dataOnePage.name}</h1>
            <Button item={dataOnePage} cart={cart} setCart={setCart} />
          </div>

          <figure className="word_photo_day">
            <img
              className="photo_day"
              src={dataOnePage.image.src}
              alt={dataOnePage.image.alt}
            />
            {/* <img
              className="photo_day"
              src={"/images/Rectangle1.png"}
              alt="photo of the day"
            /> */}

            <p>Photo of the day</p>
          </figure>

          <section>
            <div className="info_photo_day">
              <h2>About the {dataOnePage.name}</h2>
              <p className="category">{dataOnePage.category}</p>
              <p className="description">{dataOnePage.description}</p>
            </div>

            <div className="people_buy">
              <h3>People also buy</h3>
              <figure>
                <img
                  className="photo_day"
                  src={"/images/Rectangle10.png"}
                  alt="buy one"
                />
                <img
                  className="photo_day"
                  src={"/images/Rectangle10.1.png"}
                  alt="buy two"
                />
                <img
                  className="photo_day"
                  src={"/images/Rectangle10.2.png"}
                  alt="buy three"
                />
              </figure>
              <h3>Details</h3>
              <p className="subtitle">Size: 1020 x 1020 pixel</p>
              <p className="subtitle">Size: 15 mb</p>
            </div>
          </section>
        </header>
      ) : null}
    </>
  );
};
