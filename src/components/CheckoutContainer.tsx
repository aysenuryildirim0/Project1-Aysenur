import type { ClothingProduct } from "../data/data";

interface CheckoutContainerProp {
  data: ClothingProduct[];
}

export default function CheckoutContainer({ data }: CheckoutContainerProp) {
  return (
    <div>
      <h1>Checkout</h1>
      {data.length === 0 && <p>Card empty</p>}
      {data.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Price: {product.price.toFixed(2)}</p>
          <p>Quantity: {product.itemQuantity}</p>
          <p>Total: {(product.price * product.itemQuantity).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
