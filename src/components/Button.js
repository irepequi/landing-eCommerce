//SCSS STYLE
import "./scss/button.scss";

export const Button = ({ item, cart, setCart }) => {
  const addCart = () => {
    setCart([...cart, item]);
  };

  return <button onClick={addCart}>ADD TO CART</button>;
};
