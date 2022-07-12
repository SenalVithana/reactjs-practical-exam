import React from "react";
import "./App.css";
import Card from "./Components/Card";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Cart from "./Components/Cart";
import CartModal from "./Components/CartModal";

function App(props) {
  const [response, setResponse] = useState();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("all");
  const [filteredArray, setFilteredArray] = useState();
  
  let total = 0;

  const fetchPost = async () => {
    fetch(
      "https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setResponse(data);
        setFilteredArray(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  console.log(order);

  return (
    <div className="App">
      <div className="cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-cart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>{" "}
        <p className="cart-num">{props._products.numberCart}</p>
      </div>

      <div className="main">
        <div className="header">
          <h1>MStore</h1>

          <div className="filter">
            <label for="order">Order By : </label>
            <select
              name="order"
              id="order"
              onChange={(e) => {
                if (e.target.value == "all") {
                  setFilteredArray(response);
                } else {
                  let array = response.filter(
                    (x) => x.details.type == e.target.value
                  );
                  setFilteredArray(array);
                  console.log(order);
                }
              }}
            >
              <option value="all">All</option>
              <option value="t-shirt">T-Shirt</option>
              <option value="dress shirts">Dress Shirt</option>
            </select>

            <label for="filter">Size : </label>
            <select
              name="filter"
              id="filter"
              onChange={(e) => {
                if (e.target.value == "all") {
                  setFilteredArray(response);
                } else {
                  let array = response.filter(
                    (x) => x.details.size == e.target.value
                  );
                  setFilteredArray(array);
                  console.log("filter : ", filteredArray);
                }
              }}
            >
              <option value="all">All</option>
              <option value="xsmall">XS</option>
              <option value="small">S</option>
              <option value="medium">M</option>
              <option value="large">large</option>
            </select>
          </div>
        </div>

        <div className="products">
          {loading ? (
            <span>loading</span>
          ) : (
            <div className="cards">
              {filteredArray.map((item, index) => {
                return <Card data={item} />;
              })}
            </div>
          )}

          <div>
            <p>Cart Items</p>
            {props._products.Carts.map((item, index) => {
              total = total + item.productdata.details.price;
              return <Cart data={item} />;
            })}
          </div>
          <div className="checkout">
            <h2>Total : {total}</h2>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    _products: state._todoProduct,
  };
};

export default connect(mapStateToProps)(App);
