import Header from "../../Components/Header";
import FlipCards from "../../Components/FlipCards";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";

function Vocabulary() {
  return (
    <div className="App">
      <Header></Header>
      <body ontouchstart="">
        <h1 className="flex items-center justify-center m-4 text-4xl font-bold">Vocabulary</h1>
        <div className="flex flex-wrap justify-center mt-4">
        {
        vocabularies.map((i) => {
          return(
            <FlipCards title={i.title} titleSpanish={i.titleSpanish}url={i.img}/>
          )
        })
        }
        </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default Vocabulary;