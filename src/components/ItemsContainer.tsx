import ItemCard from "./Itemcard";
import type { ClothingProduct } from "../data/data";

interface ItemsContainerPrp {
  data: ClothingProduct[];
}

export default function ItemsContainer({ data }: ItemsContainerPrp) {
  return (
    <div>
      {data.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </div>
  );
}
