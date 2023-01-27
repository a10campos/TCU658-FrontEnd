import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";
import TestCards from "../../Components/TestCards";
export default function TestPage () {
    return (
        <>
        <Header></Header>
        <body className="h-full">
        <h1 className="flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-8">Practice</h1>
          <div className="w-[100%] flex flex-wrap mt-4 items-center px-2 justify-center">
          {
          vocabularies.map((i) => {
            return(
              <TestCards title={i.title} titleSpanish={i.titleSpanish}url={i.img}/>
            )
          })
          }
          </div>
      </body>
      <Footer></Footer>
        </>
    );
}