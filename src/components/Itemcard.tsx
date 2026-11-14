import type { ClothingProduct } from "../data/data";
import { useState } from "react";

interface ItemCardProp {
  product: ClothingProduct;
  addtoCart: (selectedClothing: ClothingProduct) => void;
}

export default function ItemCard({ product, addtoCart }: ItemCardProp) {
  const [amountAvaliable, setAmount] = useState(0);
  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Fit: {product.fit}</p>
      <p>Colour: {product.color}</p>
      <p>Product Category: {product.category}</p>
      <p>Description: {product.description}</p>
      <p>Size of the clothing: {product.size}</p>
      <p>Price: ${product.price.toFixed(2)}</p>

      {/* Displays stock of the product, if there is 0 stock 'Out of Stock'*/}
      {product.quantity === 0 ? (
        <p>Out of Stock!</p>
      ) : (
        <p>Remaning stock: {product.quantity}</p>
      )}

      {/*quantity of the selected product goes down but can't go down below 0*/}
      <p>Selected Quantity: {amountAvaliable}</p>
      <button
        onClick={() => setAmount(amountAvaliable - 1)}
        disabled={amountAvaliable === 0}
      >
        -
      </button>

      {/*increases the quantity of the product that user selects but prevents going over the stock avaliable*/}
      <button
        onClick={() => setAmount(amountAvaliable + 1)}
        disabled={amountAvaliable === product.quantity}
      >
        +
      </button>

      {/* Add to card button */}
      <button
        onClick={() => {
          addtoCart({
            ...product,
            itemQuantity: amountAvaliable,
          });
          setAmount(0);
        }}
        disabled={amountAvaliable == 0}
      >
        Add to cart
      </button>
    </div>
  );
}
