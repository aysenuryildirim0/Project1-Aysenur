import ItemCard from "./Itemcard";
import type { ClothingProduct } from "../data/data";

interface ItemsContainerPrp {
  data: ClothingProduct[];
  addtoCart: (selectedCloting: ClothingProduct) => void;
}

export default function ItemsContainer({ data, addtoCart }: ItemsContainerPrp) {
  return (
    <div>
      {data.map((product) => (
        <ItemCard key={product.id} product={product} addtoCart={addtoCart} />
      ))}
    </div>
  );
}
