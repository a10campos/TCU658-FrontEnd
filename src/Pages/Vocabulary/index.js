import Header from "../../Components/Header";
import FlipCards from "../../Components/FlipCards";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";

function Vocabulary() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className="border flex items-center justify-center m-2 text-2xl font-bold">Vocabulary</h1>
      <div className="border flex flex-wrap justify-center">
      {
      vocabularies.map((i) => {
        return(
          <FlipCards title={i.title} titleSpanish={i.titleSpanish}url={i.img}/>
        )
      })
      }
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Vocabulary;