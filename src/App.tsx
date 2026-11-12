import "./App.css";
import ItemsContainer from "./components/ItemsContainer";
import { products } from "./data/data";

function App() {
  return (
    <>
      <h1>Thrift Happens</h1>
      <h2>Give old clothes another chance!</h2>
      <ItemsContainer data={products} />
    </>
  );
}

export default App;
