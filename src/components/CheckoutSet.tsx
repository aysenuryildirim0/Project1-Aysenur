import { useState } from "react";
import { products } from "../data/data";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";

export default function CheckoutSet() {
  const [checkoutCard, setCheckoutCart] = useState<ClothingProduct[]>([]);
  const [avaliableClothes, setAvaliableClothes] =
    useState<ClothingProduct[]>(products);
  const addtoCart = (selectedClothing: ClothingProduct) => {
    if (selectedClothing.itemQuantity <= 0) {
      return;
    }

    setAvaliableClothes((avaliableClothes) =>
      avaliableClothes.map((product) =>
        product.id === selectedClothing.id
          ? {
              ...product,
              quantity: product.quantity - selectedClothing.itemQuantity,
            }
          : product,
      ),
    );

    setCheckoutCart((checkoutCart) => {
      const existsInCart = checkoutCart.find(
        (cartItem) => cartItem.id === selectedClothing.id,
      );

      if (existsInCart) {
        return checkoutCart.map((cartItem) =>
          cartItem.id === selectedClothing.id
            ? {
                ...cartItem,
                itemQuantity:
                  cartItem.itemQuantity + selectedClothing.itemQuantity,
              }
            : cartItem,
        );
      }

      return [...checkoutCart, selectedClothing];
    });
  };

  const removeHandle = (id: number) => {
    const removedItem = checkoutCard.find((cartItem) => cartItem.id === id);

    if (!removedItem) {
      return;
    }

    setCheckoutCart((checkoutCart) =>
      checkoutCart.filter((cartItem) => cartItem.id !== id),
    );

    setAvaliableClothes((avaliableClothes) =>
      avaliableClothes.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: product.quantity + removedItem.itemQuantity,
            }
          : product,
      ),
    );
  };

  return (
    <div>
      <ItemsContainer data={avaliableClothes} addtoCart={addtoCart} />
      <CheckoutContainer data={checkoutCard} removeHandle={removeHandle} />
    </div>
  );
}
