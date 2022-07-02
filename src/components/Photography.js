import { Card } from "./Card";

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
          <span className="material-icons">sync_alt</span>
          <p>Sort By</p>
          <select onChange={handleChange}>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>

      <div className="photoAndFilter">
        {/* FILTER --------------------------- */}
        <aside>
          <h3>Category</h3>
          <form name="formCheck">
            <label htmlFor="people">
              <input
                type="checkbox"
                id="people"
                value="people"
                onChange={handleChangeChecks}
              />
              People
            </label>

            <label htmlFor="premium">
              <input
                type="checkbox"
                id="premium"
                value="premium"
                onChange={handleChangeChecks}
              />
              Premium
            </label>

            <label htmlFor="pets">
              <input
                type="checkbox"
                id="pets"
                value="pets"
                onChange={handleChangeChecks}
              />
              Pets
            </label>

            <label htmlFor="food">
              <input
                type="checkbox"
                id="food"
                value="food"
                onChange={handleChangeChecks}
              />
              Food
            </label>

            <label htmlFor="landmarks">
              <input
                type="checkbox"
                id="landmarks"
                value="landmarks"
                onChange={handleChangeChecks}
              />
              Landmarks
            </label>

            <label htmlFor="cities">
              <input
                type="checkbox"
                id="cities"
                value="cities"
                onChange={handleChangeChecks}
              />
              Cities
            </label>

            <label htmlFor="nature">
              <input
                type="checkbox"
                id="nature"
                value="nature"
                onChange={handleChangeChecks}
              />
              Nature
            </label>
          </form>

          <div className="line"></div>

          <h3>Price range</h3>
          <form>
            <label htmlFor="cbox1">
              <input type="checkbox" id="cbox1" value="lower20" />
              Lower than $20
            </label>

            <label htmlFor="cbox2">
              <input type="checkbox" id="cbox2" value="20between100" />
              $20 - $100
            </label>

            <label htmlFor="cbox3">
              <input type="checkbox" id="cbox3" value="100between200" />
              $100 - $200
            </label>

            <label htmlFor="cbox4">
              <input type="checkbox" id="cbox4" value="more200" />
              More than $200
            </label>
          </form>
        </aside>

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
