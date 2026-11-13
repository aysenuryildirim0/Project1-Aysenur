import type { ClothingProduct } from "../data/data";

interface CheckoutContainerProp {
  data: ClothingProduct[];
}

export default function CheckoutContainer({ data }: CheckoutContainerProp) {
  return (
    <div>
      <h1>Checkout</h1>
      {data.length === 0 && <p>Card empty</p>}{" "}
    </div>
  );
}
