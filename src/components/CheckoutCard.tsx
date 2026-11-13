import type { ClothingProduct } from "../data/data";

interface CheckoutCardProp {
  product: ClothingProduct;
  removeHandle: (id: number) => void;
}

export default function checkoutCard({
  product,
  removeHandle,
}: CheckoutCardProp) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: {product.price.toFixed(2)}</p>
      <p>Quantit: {product.itemQuantity}</p>
      <p> Total: {(product.price * product.itemQuantity).toFixed(2)}</p>
      <button onClick={() => removeHandle(product.id)}>Remove</button>
    </div>
  );
}
