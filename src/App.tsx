import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import { products } from "./data/data";
import CheckoutContainer from "./components/CheckoutContainer";

function App() {
  return (
    <>
      <h1>Thrift Happens</h1>
      <h2>Give old clothes another chance!</h2>
      <ItemsContainer data={products} />
      <CheckoutContainer data={[]} />
    </>
  );
}

export default App;
