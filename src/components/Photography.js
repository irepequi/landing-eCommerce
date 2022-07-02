import { useState } from "react";
import { Card } from "./Card";
import { Filter } from "./Filter";

//SCSS STYLE
import "./scss/photography.scss";

export const Photography = ({
  setSortValue,
  onePage,
  setOnePage,
  categories,
  setCategories,
  cart,
  setCart,
}) => {
  const [openFilter, setOpenFilter] = useState(false);

  const openToFilter = () => {
    setOpenFilter(!openFilter);
  };

  const handleChange = (e) => {
    setSortValue(e.target.value);
  };

  // onchange de filtro
  const handleChangeChecks = () => {
    let arrTemp = [];

    for (let i = 0; i < document.formCheck.elements.length; i++) {
      if (document.formCheck.elements[i].checked === true) {
        arrTemp.splice(i, 1, document.formCheck.elements[i].id);
      }
    }

    arrTemp.length === 0
      ? setCategories([
          "people",
          "food",
          "landmarks",
          "pets",
          "premium",
          "cities",
          "nature",
        ])
      : setCategories(arrTemp);
  };

  return (
    <>
      <div className="top_photography">
        <h2>
          Photography / <span>Premium Photos</span>
        </h2>

        <div className="sort">
          <img
            onClick={openToFilter}
            className="icon_filter"
            src="/images/filter.png"
            alt="icon filter"
          />
          <div className="icon_sort_select">
            <span className="material-icons">sync_alt</span>
            <p>Sort By</p>
            <select onChange={handleChange}>
              <option value="price">Price</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
      </div>

      <div className="photoAndFilter">
        {/* FILTER --------------------------- */}
        <aside>
          <Filter handleChangeChecks={handleChangeChecks} />
          {openFilter && <Filter handleChangeChecks={handleChangeChecks} />}
        </aside>

        {/* TODO - AÑADIR UNA CLASE PARA PONERLA EN DISPLAY:NONE O DISPLAY:BLOCK  */}

        {/* ITEMS (PHOTOS) --------------------------- */}
        <main>
          {onePage.data &&
            onePage.data.map((item, index) => (
              <div className="card" key={index}>
                <Card item={item} cart={cart} setCart={setCart} />
              </div>
            ))}
        </main>
      </div>
    </>
  );
};
