import React from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Product of id:{id} </h1>
    </div>
  );
};

export { Product };
