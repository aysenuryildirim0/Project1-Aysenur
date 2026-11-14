import type { ClothingProduct } from "../data/data";

interface CheckoutCardProp {
  product: ClothingProduct;
  removeHandle: (id: number) => void;
}

{/*checkout layout*/}
export default function checkoutCard({
  product,
  removeHandle,
}: CheckoutCardProp) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Price: {product.price.toFixed(2)}</p>
      <p>Quantity: {product.itemQuantity}</p>
      <p> Total: {(product.price * product.itemQuantity).toFixed(2)}</p>
      {/* removes product from checkout when clicked */}
      <button onClick={() => removeHandle(product.id)}>Remove</button>
    </div>
  );
}
