import { useState } from "react";

//COMPONENTS
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

  const clearChecks = () => {
    for (let i = 0; i < document.formCheck.elements.length; i++) {
      if (document.formCheck.elements[i].checked === true) {
        document.formCheck.elements[i].checked = false;
      }
    }
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
        {/* FILTER LAPTOP */}
        <aside>
          <div className="filter_laptop">
            <Filter handleChangeChecks={handleChangeChecks} />
          </div>
        </aside>

        {/* ITEMS (PHOTOS) */}
        <main>
          {onePage.data &&
            onePage.data.map((item, index) => (
              <div className="card" key={index}>
                <Card item={item} cart={cart} setCart={setCart} />
              </div>
            ))}
        </main>
      </div>

      {/* FILTER MOBILE  */}
      {openFilter && (
        <div className="filter_mobile">
          <Filter handleChangeChecks={handleChangeChecks} />

          <div className="buttons">
            <button className="clear_button" onClick={() => clearChecks}>
              CLEAR
            </button>
            <button onClick={openToFilter}>SAVE</button>
          </div>
        </div>
      )}
    </>
  );
};
