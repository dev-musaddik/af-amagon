import React from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../ProductsApi";
import Card from "./Card/Card";

const Details = () => {
  const { id } = useParams();
  console.log(typeof id)
  // Convert the id parameter to a number
  const productId = parseInt(id, 10);

  // Find the product with the matching id
  const product = data.find((item) => item.id === productId);

  // Check if the product is found
  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <button>
          <Link to="/">Back</Link>{" "}
        </button>
      </div>
    );
  }

  return (
    <div>
    <Card data={product}/>
    </div>
  );
};

export default Details;
