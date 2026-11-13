import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import { products } from "./data/data";
import CheckoutContainer from "./components/CheckoutContainer";
import type { ClothingProduct } from "./data/data";
import { useState } from "react";

function App() {
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

  return (
    <>
      <h1>Thrift Happens</h1>
      <h2>Give old clothes another chance!</h2>
      <ItemsContainer data={avaliableClothes} addtoCart={addtoCart} />
      <CheckoutContainer data={checkoutCard} />
    </>
  );
}
export default App;
