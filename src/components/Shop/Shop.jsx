import React from "react";
import "./Shop.css";
import Card from "../Card/Card";
import { data } from "../../ProductsApi";
const Shop = () => {
  const newData=data.map(item => ({
    ...item,
    detailsBtn: true
  }));
  return (
    <div className="shop" id="collection">
      <div className="heading">
        <h2>Cute Watches Collection</h2>
        <p>
          "Step into the enchanting world of Cute Watches Collection, where
          timekeeping becomes an art form. Our curated selection of wristwatches
          combines functionality with timeless charm. From playful designs to
          elegant classics, we offer a diverse range of timepieces to suit every
          style and occasion. Find the perfect watch to express your
          individuality and elevate your everyday moments with a touch of whimsy
          and elegance."
        </p>
      </div>
      <div className="shop-section">
      {newData.map((item, index) => (
          <Card data={item} key={index} />
      ))}
      </div>
    </div>
  );
};

export default Shop;



