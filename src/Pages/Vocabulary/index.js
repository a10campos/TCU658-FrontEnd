import Header from "../../Components/Header";
import FlipCards from "../../Components/FlipCards";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";

function Vocabulary() {
  return (
    <div className="App">
      <Header></Header>
      <body className="h-full">
          <h1 className="flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-8">Vocabulary</h1>
          <div className="w-[100%] flex flex-wrap mt-4 items-center px-2 justify-center">
          {
          vocabularies.map((i) => {
            return(
              <FlipCards title={i.title} titleSpanish={i.titleSpanish}url={i.img} description={i.desciption}/>
            )
          })
          }
          </div>
          <div className="grid place-items-center">
            <a href="/units/vocabulary/test">
              <button  className="m-2 border bg-blue rounded-md p-4  border-[#e6e6e6] text-white">Let's Practice</button>
            </a>
          </div>
      </body>
      <Footer></Footer>
    </div>
  );
}

export default Vocabulary;