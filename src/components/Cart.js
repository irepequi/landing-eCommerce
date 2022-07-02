//SCSS STYLE
import "./scss/cart.scss";

export const Cart = ({ cart, setCart }) => {
  const delItem = (item) => {
    const itemsModified = cart.filter((elem) => elem._id !== item._id);

    return setCart(itemsModified);
  };

  return (
    <div className="cart">
      <div>
        {cart.length === 0 ? (
          <div className="no_products">
            <span className="material-icons">production_quantity_limits</span>
            <p> There aren't products</p>
          </div>
        ) : (
          <div>
            {cart.map((e, index) => {
              return (
                <div key={index}>
                  <figure>
                    <span onClick={() => delItem(e)} className="material-icons">
                      close
                    </span>
                  </figure>

                  <div className="item">
                    <div className="info_item">
                      <h5>{e.name}</h5>
                      <p>{e.price}€</p>
                    </div>
                    <img src={e.image.src} alt={e.image.alt} />
                  </div>

                  <hr />
                </div>
              );
            })}
            <button onClick={() => setCart([])}>CLEAR</button>
          </div>
        )}
      </div>
    </div>
  );
};
