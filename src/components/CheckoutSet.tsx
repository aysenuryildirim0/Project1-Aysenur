import { useState } from "react";
import { products } from "../data/data";
import type { ClothingProduct } from "../data/data";
import ItemsContainer from "./ItemsContainer";
import CheckoutContainer from "./CheckoutContainer";

export default function CheckoutSet() {
  const [checkoutCard, setCheckoutCart] = useState<ClothingProduct[]>([]);
  const [avaliableClothes, setAvaliableClothes] =
    useState<ClothingProduct[]>(products);
  {
    //adds product to cart and products stock gets updated
  }
  const addtoCart = (selectedClothing: ClothingProduct) => {
    //prevents adding 0 quantity
    if (selectedClothing.itemQuantity <= 0) {
      return;
    }

    //updates the stock
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

    //checks if the product already is in cart
    setCheckoutCart((checkoutCart) => {
      const existsInCart = checkoutCart.find(
        (cartItem) => cartItem.id === selectedClothing.id,
      );

      //if the product is added to the cart before increases quantity
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

  //removes from checkout
  const removeHandle = (id: number) => {
    const removedItem = checkoutCard.find((cartItem) => cartItem.id === id);

    if (!removedItem) {
      return;
    }

    //after products are removed from the cart, quantity of product goes back
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

  //displays available products*
  return (
    <div>
      <ItemsContainer data={avaliableClothes} addtoCart={addtoCart} />
      <CheckoutContainer data={checkoutCard} removeHandle={removeHandle} />
    </div>
  );
}
