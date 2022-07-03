import React from "react";

//SCSS
import "./scss/filter.scss";

export const Filter = ({ handleChangeChecks }) => {
  return (
    <>
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
    </>
  );
};
