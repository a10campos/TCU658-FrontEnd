import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";
import TestCards from "../../Components/TestCards";
//import { useParams } from "react-router-dom";
//import {useState,useEffect} from "react"

export default function TestPage () {
  const actualQuestion = 0;
  //const [actualQuestion,setActualQuetion] = useState(0);
  /*const [score,setScore] = useState(0);
  const [isFinished,setIsFinished] = useState(false);

  function handleAnswerSubmit() {
 
  }*/
  
  //const {theme_id} = useParams();
    return (
        <>
        <Header></Header>
        <body className="h-full">
        <h1 className="flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-8">Practice</h1>
          <div className="w-[100%] flex flex-wrap mt-4 items-center px-2 justify-center">
          {
             <TestCards title={vocabularies[actualQuestion].title} titleSpanish={vocabularies[actualQuestion].titleSpanish}url={vocabularies[actualQuestion].img}/>
          }
          </div>
      </body>
      <Footer></Footer>
     
        </>
    );
}