import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";
import TestCards from "../../Components/TestCards";
import { useParams } from "react-router-dom";

export default function TestPage () {
  const {theme_id} = useParams();
    return (
        <>
        <Header></Header>
        <body className="h-full">
        <h1 className="flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-8">Practice</h1>
          <div className="w-[100%] flex flex-wrap mt-4 items-center px-2 justify-center">
          {
          vocabularies.map((i) => {
              if (theme_id === i.id_theme) {
                return(
                  <TestCards title={i.title} titleSpanish={i.titleSpanish}url={i.img}/>
                )
              }
              return (
                <></>
              )
          })
          }
          </div>
      </body>
      <Footer></Footer>
        </>
    );
}