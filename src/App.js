import { useState, useEffect } from "react";
import axios from "axios";

//COMPONENTS
import { Header } from "./components/Header";
import { Photography } from "./components/Photography";
import { Cart } from "./components/Cart";

//SCSS STYLE
import "./scss/styles.scss";

function App() {
  const [onePage, setOnePage] = useState([]);
  const [dataOnePage, setDataOnePage] = useState([]);
  const [links, setLinks] = useState([]);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [sortValue, setSortValue] = useState("price");
  const [simbolo, setSimbolo] = useState();
  const [categories, setCategories] = useState([
    "people",
    "food",
    "landmarks",
    "pets",
    "premium",
    "cities",
    "nature",
  ]);

  //recoge la info de: de la primera página filtrada, los links y los label para la paginación
  useEffect(() => {
    axios({
      method: "post",
      url: "https://technical-frontend-api.bokokode.com/api/products",
      headers: { key: "Accept", value: "application/json", type: "text" },
      data: {
        sort: {
          key: sortValue,
          type: "ASC",
        },
        categories: categories,
      },
    }).then((res) => {
      setOnePage(res.data.data);
      setLinks(res.data.data.links);
      setSimbolo(res.data.data.links.label);
    });
  }, [categories, sortValue]);

  //recoge la info del primer producto de la primera página sin filtros
  useEffect(() => {
    axios
      .post("https://technical-frontend-api.bokokode.com/api/products")

      .then((res) => {
        // console.log("esto es res.data.data", res.data.data);
        setDataOnePage(res.data.data.data[0]);
      });
  }, []);

  //oculto/visible carrito de la compra
  const openToCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <>
      <nav>
        <figure className="logo">
          <img src={"/images/logo.png"} alt="logo" />
        </figure>

        <div className="icon_cart">
          {/* numeración de articulos en el carrito */}
          {cart && cart.length > 0 && (
            <div className="numberCart">{cart.length}</div>
          )}

          <img
            onClick={openToCart}
            src={"/images/shopping-cart.png"}
            alt="cart"
          />
        </div>
      </nav>
      <hr />

      {openCart && (
        <Cart cart={cart} setCart={setCart} openToCart={openToCart} />
      )}

      <Header cart={cart} setCart={setCart} dataOnePage={dataOnePage} />

      <hr />

      <Photography
        setSortValue={setSortValue}
        cart={cart}
        setCart={setCart}
        categories={categories}
        setCategories={setCategories}
        setOnePage={setOnePage}
        onePage={onePage}
        dataOnePage={dataOnePage}
      />

      {/* PAGINATION */}
      <section className="pagination">
        {/* <a className="active">{onePage.links[0].label}</a> */}
        {links &&
          links.map((link, index) => {
            return (
              <div key={index}>
                <a
                  onClick={link.src}
                  className={link.active ? "active" : undefined}
                >
                  {link.label}
                </a>
              </div>
            );
          })}
        {/* <a className="active">{onePage.links[10].label}</a>    */}
      </section>
    </>
  );
}

export default App;
