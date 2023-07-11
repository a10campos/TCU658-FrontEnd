import {useState} from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/PopUp";
import ProgressBar from "../../Components/ProgressBar";
import sound from "../../Sounds/Correct.wav"
import badsound from "../../Sounds/error.wav";

export default function TestCards(props) {
    const [respuesta,setRespuesta] = useState("");
    const [actualQuestion,setActualQuetion] = useState(0);
    const [score,setScore] = useState(0);
    const [input,setInput] = useState('');
    const [showSearch,setShowSearch] = useState("");
    const [totalQuestions,setTotalQuestions] = useState(10);
    const [buttonText,setButtonText] = useState("Next");
    const {level_id,unit_id,theme_id} = useParams();
    const [isfinished,setIsFinished] = useState(false);

    const takeChangeInput = (e) => {
        setRespuesta(e.target.value)
        setInput(e.target.value);
    
    }

  function handleAnswerSubmit() {
    props.filter.forEach(filtro => {
      console.log(filtro.id);
    });
    
    if (respuesta.toLowerCase() === props.filter[actualQuestion].title.toLowerCase()) {
      setScore(score + 1);
      setShowSearch("bg-green");
      new Audio(sound).play();
    }
    else {
      new Audio(badsound).play();
      setShowSearch("bg-[#ff0000]");
    }
      setTimeout(() => {
        setActualQuetion(actualQuestion +1);
        if (actualQuestion === totalQuestions-2 ){
          setButtonText("View results");
        }
        setInput('');
        setShowSearch("")
      },1800);

      if (props.filter.length < totalQuestions)
      {
        setTotalQuestions(props.filter.length)
      }
      if (actualQuestion === totalQuestions-1 ){
        setIsFinished(true);
      }
    }

    //var filter2 = filter1.sort(function() {return Math.random() - 0.5});
    if (isfinished) return (
      <Spinner url={`/${level_id}/${unit_id}/${theme_id}`} score={score} questions={props.filter.length-score}></Spinner>
    );

    return (
        <>
        <body className="h-full">
        <h1 className="flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-6">Practice</h1>
        <div className="flex flex-col items-center justify-center">
        <h2 className="flex items-center justify-center m-4 w-[400px] text-center">Type the word or expression exactly as it appears in the vocabulary section, including the punctuation marks.</h2>
          <ProgressBar state={(actualQuestion+1)*100/totalQuestions-1}></ProgressBar>
          <span className="flex  p-2 justify-center itemns-center text-2xl font-bold">Score: {score}</span>
          </div>
            <div className="w-[100%] flex flex-col mt-2 items-center px-2 justify-center">
            
              <div className={`flex flex-col h-[300px] w-[280px] rounded-2xl items-center ${showSearch}`}>
                <img alt=" "className=" mt-4 w-40 h-40 rounded-xl shadow-2xl" src={props.filter[actualQuestion].img}/>
                <textarea value={input} onChange={takeChangeInput}
                placeholder="What is it?" className=" p-2 rounded-md placeholder:text-center w-[80%] text-xl border border-[#e6e6e6] mt-6"></textarea>
              </div>
                <button className="border rounded-xl p-3 w-[150px] bg-blue text-white mb-12" onClick={handleAnswerSubmit}>{buttonText}</button>
            </div>
      </body>
     
        </>
    );
}