import type { ClothingProduct } from "../data/data";

interface ItemCardProp {
  product: ClothingProduct;
}

export default function ItemCard({ product }: ItemCardProp) {
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Fit: {product.fit}</p>
      <p>Product Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>Size of the clothing: {product.size}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Remaning stock avaliable: {product.quantity}</p>
    </div>
  );
}
