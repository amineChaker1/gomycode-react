import React from "react";
import c from "./ecommerce.module.css";
const Ecommerce = ({ ourPropProduct }) => {
  return (
    <>
      <div className={c.container}>
        <div className={c.product}>
          <div className={c.name}>{ourPropProduct.name}</div>
          <div className={c.info}>
            <p>{ourPropProduct.id}</p>
            <p>{ourPropProduct.prix}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
