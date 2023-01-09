import Button from "./components/Button";
import Container from "./components/Container";
import Ecommerce from "./components/Ecommerce";
const appStyle = {
  color: "red",
};
function App() {
  let products = [
    { name: "hoddies", id: "nike", prix: "8000" },
    { name: "pants", id: "gucci", prix: "6000" },
    { name: "shoes", id: "adiddas", prix: "7000" },
  ];

  return (
    <div className="App" style={appStyle}>
      something
      <Container />
      <Button />
      {products.map((product) => (
        <Ecommerce key={product.id} ourPropProduct={product} />
      ))}
    </div>
  );
}

export default App;
