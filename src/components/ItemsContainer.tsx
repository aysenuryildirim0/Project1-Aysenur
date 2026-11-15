import ItemCard from "./Itemcard";
import type { ClothingProduct } from "../data/data";

interface ItemsContainerProps {
  data: ClothingProduct[];
  addtoCart: (selectedCloting: ClothingProduct) => void;
}

export default function ItemsContainer({ data, addtoCart }: ItemsContainerProps) {
  return (
    <div className="display">
      {/* loops through array and makes a itemcard for each */}
      {data.map((product) => (
        <ItemCard key={product.id} product={product} addtoCart={addtoCart} />
      ))}
    </div>
  );
}
