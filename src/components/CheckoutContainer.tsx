//Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

import type { ClothingProduct } from "../data/data";
import CheckoutCard from "./CheckoutCard";

interface CheckoutContainerProp {
  data: ClothingProduct[];
  removeHandle: (id: number) => void;
}

export default function CheckoutContainer({
  data,
  removeHandle,
}: CheckoutContainerProp) {
  const grandTotal = data.reduce(
    (total, product) => total + product.price * product.itemQuantity,
    0,
  );

  return (
    <div>
      <h1>Checkout: </h1>
      {data.length === 0 && <p>Cart empty</p>}
      {data.map((product) => (
        <CheckoutCard
          key={product.id}
          product={product}
          removeHandle={removeHandle}
        />
      ))}

      <h2>Your grand total: {grandTotal.toFixed(2)}</h2>
    </div>
  );
}
