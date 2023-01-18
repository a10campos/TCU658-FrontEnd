import Header from "./Components/Header";
import Cards from "./Components/Cards"
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="border flex items-center justify-center m-2 text-2xl font-bold">Vocabulary</h1>
      <div className="border flex flex-wrap justify-center">
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
