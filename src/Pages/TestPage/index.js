import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";
import {useState} from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/PopUp";
import ProgressBar from "../../Components/ProgressBar";
import sound from "../../Sounds/Correct.wav"
import badsound from "../../Sounds/error.wav";

export default function TestPage () {
  const [respuesta,setRespuesta] = useState("");
  const [actualQuestion,setActualQuetion] = useState(0);
  const [score,setScore] = useState(0);
  const [input,setInput] = useState('');
  const [showSearch,setShowSearch] = useState("");
  const {level_id,unit_id,theme_id} = useParams();
  const [isfinished,setIsFinished] = useState(false);

  const takeChangeInput = (e) => {
    setRespuesta(e.target.value)
    setInput(e.target.value);
    
  }

  function handleAnswerSubmit() {
    if (respuesta === filter[actualQuestion].title) {
      setScore(score + 1);
      setShowSearch("bg-green");
      new Audio(sound).play();
    }
    else {
      new Audio(badsound).play();
      setShowSearch("bg-[#ff0000]");
    }
      setTimeout(() => {
        setActualQuetion(actualQuestion+1);
        setInput('');
        setShowSearch("")
      },1500);
      if (actualQuestion === filter.length-1){
        setIsFinished(true);
      }
    }
    const filter = vocabularies.filter (function(element) {
      return element.id_theme === theme_id
    })

    if (isfinished) return (
      <Spinner url={`/${level_id}/${unit_id}/${theme_id}`} score={score} questions={filter.length-score}></Spinner>
    );

    return (
        <>
        <Header></Header>
        <body className="h-full">
        <h1 className="flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-8">Practice</h1>
        <div className="flex flex-col items-center justify-center">
          <ProgressBar state={(actualQuestion+1)*100/filter.length-1}></ProgressBar>
          <span className="flex  p-2 justify-center itemns-center text-2xl font-bold">Score: {score}</span>
          </div>
            <div className="w-[100%] flex flex-col mt-2 items-center px-2 justify-center">
              <div className={`flex flex-col h-[250px] w-[200px] rounded-xl items-center m-2 ${showSearch}`}>
                <img alt=" "className=" mt-4 w-32 h-32 rounded-xl shadow-2xl" src={filter[actualQuestion].img}/>
                <input value={input} onChange={takeChangeInput}
                placeholder="What it's" className=" p-2 rounded-md placeholder:text-center w-[80%] text-xl border border-[#e6e6e6] mt-4"></input>
                <span className=" text-xl text-gray-500 mt-2 dark:text-gray-400">{filter[actualQuestion].titleSpanish}</span>
              </div>
              <div>
                <button className="border rounded-xl p-2 w-[150px] bg-blue text-white" onClick={handleAnswerSubmit}> Siguiente </button>
                
              </div>
            </div>
      </body>
      <Footer></Footer>
     
        </>
    );
}