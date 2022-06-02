import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getModel } from "../../redux-manager/result/actions";

function Header() {
  const [value, SetValue] = useState("");
  const dispath = useDispatch();
  const tankeValue = (e) => {
    SetValue(e.target.value);
  };
  const showValue = () => {
    console.log(value);
    dispath(getModel(value));
  };

  const submiting = (e) => {
    e.preventDefault();
  };
  return (
    <div className="header">
      <div className="container">
        <div className="flex-container">
          <Link className="header-link" to="/">
            <div className="market-price">Market Price</div>
          </Link>
          <form onSubmit={submiting}>
            <input
              onChange={tankeValue}
              className="home__header-input"
              type="text"
              width={400}
            />
            <Link className="header-link" to="/filter/result">
              <button
                onClick={showValue}
                type="button"
                className="home__header-button"
              >
                Искать
              </button>
            </Link>
            <button className="home__header-button-in" type="button">
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
