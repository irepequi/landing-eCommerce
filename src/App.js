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
  const [dataOnePage, setDataOnePage] = useState();
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

  //collects the info of: the first filtered page, the links and the label for the pagination
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

  //collects the info of the first product on the first page without filters
  useEffect(() => {
    axios
      .post("https://technical-frontend-api.bokokode.com/api/products")

      .then((res) => {
        setDataOnePage(res.data.data.data[0]);
      });
  }, []);

  //hidden/visible cart
  const openToCart = () => {
    setOpenCart(!openCart);
  };

  const changePage = (url) => {
    axios({
      method: "post",
      url: url,
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
  };

  return (
    <>
      <nav>
        <figure className="logo">
          <img src={"/images/logo.png"} alt="logo" />
        </figure>

        <div className="icon_cart">
          {/* number of items in cart */}
          {cart && cart.length > 0 && (
            <div className="numberCart">{cart.length}</div>
          )}

          {/* CART ICON */}
          <img
            onClick={openToCart}
            src={"/images/shopping-cart.png"}
            alt="cart"
          />
        </div>
      </nav>
      <hr />

      {/* CART */}
      {openCart && (
        <Cart cart={cart} setCart={setCart} openToCart={openToCart} />
      )}

      {/* HEADER */}
      <Header cart={cart} setCart={setCart} dataOnePage={dataOnePage} />

      <hr />

      {/* PHOTOGRAPHY */}
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

      {/* PAGES */}
      <section className="pagination">
        {links &&
          links.map((link, index) => {
            return (
              <div key={index}>
                <a
                  onClick={() => changePage(link.url)}
                  className={link.active ? "active" : undefined}
                >
                  {index === 0
                    ? "<"
                    : index === links.length - 1
                    ? ">"
                    : link.label}
                </a>
              </div>
            );
          })}
      </section>
    </>
  );
}

export default App;
