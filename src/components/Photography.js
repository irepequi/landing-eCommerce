import React from "react";

//SCSS STYLE
import "./scss/photography.scss";

export const Photography = ({ onePage, dataOnePage }) => {
  console.log("---------------", onePage.data);
  // const { name } = onePage.data[0];

  return (
    <>
      <div className="top_photography">
        <h2>
          Photography / <span>Premium Photos</span>
        </h2>

        <div className="sort">
          <span className="material-icons">sync_alt</span>
          <p>Sort By</p>
          <select>
            <option>Price</option>
            <option>Name</option>
          </select>
        </div>
      </div>

      <div className="photoAndFilter">
        {/* FILTER --------------------------- */}
        <aside>
          <h3>Category</h3>
          <label htmlFor="cbox1">
            <input type="checkbox" id="cbox1" value="people" />
            People
          </label>

          <label htmlFor="cbox2">
            <input type="checkbox" id="cbox2" value="premium" />
            Premium
          </label>

          <label htmlFor="cbox3">
            <input type="checkbox" id="cbox3" value="pets" />
            Pets
          </label>

          <label htmlFor="cbox4">
            <input type="checkbox" id="cbox4" value="Food" />
            Food
          </label>

          <label htmlFor="cbox5">
            <input type="checkbox" id="cbox5" value="Landmarks" />
            Landmarks
          </label>

          <label htmlFor="cbox6">
            <input type="checkbox" id="cbox6" value="Cities" />
            Cities
          </label>

          <label htmlFor="cbox7">
            <input type="checkbox" id="cbox7" value="Nature" />
            Nature
          </label>

          <div className="line"></div>

          <h3>Price range</h3>
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
        </aside>

        {/* PHOTOS --------------------------- */}
        <main>
          <div className="card">
            <img src={"/images/Rectangle2.5.png"} alt="cart" />
            <p className="best_seller">Best Seller</p>

            <button>ADD TO CART</button>
            <div className="info_card">
              <p className="category">People</p>
              <h3>Red Bench</h3>
              <p className="price">3.89€</p>
            </div>
          </div>

          {/* {onePage.data.map((item, index) => (
          <div className="card" key={index}>
            {item.bestseller && 
            <p className="best_seller">Best Seller</p>
            }
            <button>ADD TO CART</button>
            <p>{item.category}</p>
            <h3>{item.name}</h3>
            <p>
            item.price<span>€</span>
          </p>
          </div>
        ))} */}

          {/* FILTRO *************************  */}
          {/* <div className="investment-list">
          {foundInvestment && foundInvestment.length > 0 ? (
            foundInvestment.map((investment) => (
              <li key={investment} className="">
                <span className="investment">{investment}</span>
              </li>
            ))
          ) : (
            <h1>No results found!</h1>
          )}
        </div> */}
        </main>
      </div>
    </>
  );
};
