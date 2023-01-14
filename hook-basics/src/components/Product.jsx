import React, { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Keyboard" },
  ]);
  const [vl, setVl] = useState("");
  useEffect(() => {
    console.log("effect updated");
  }, [products]);
  const addOneProduct = () => {
    setProducts([...products, { id: 4, name: "New Product" }]);
  };
  return (
    <div>
      <div>
        <input type="text" onChange={(e) => setVl(e.target.value)} />
        {vl}
      </div>
      <button onClick={addOneProduct}>Add a Product</button>
      {products.map((product) => (
        <span> {product.name} </span>
      ))}
    </div>
  );
};

export default Product;
