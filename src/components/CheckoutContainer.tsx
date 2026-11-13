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
    </div>
  );
}
