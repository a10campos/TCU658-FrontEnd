import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import vocabularies from "../../data/vocabulary.json";
import {useState} from "react"

export default function TestPage () {
  const [respuesta,setRespuesta] = useState("");
  const [actualQuestion,setActualQuetion] = useState(0);
  const [score,setScore] = useState(0);

  function handleAnswerSubmit() {
    if (respuesta === vocabularies[actualQuestion].title) {
      setScore(score + 1);
    } 

    else {

    }
    setActualQuetion(actualQuestion+1);
  }
  
  //const {theme_id} = useParams();
    return (
        <>
        <Header></Header>
        <body className="h-full">
        <h1 className="flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-8">Practice</h1>
        <span className="flex  p-2 justify-center itemns-center ">Score: {score}</span>
          <div className="w-[100%] flex flex-col mt-4 items-center px-2 justify-center">
            <div className="border flex flex-col h-[250px] w-[200px] rounded-xl items-center m-2">
              <img alt=" "className=" mt-4 w-32 h-32 rounded-xl shadow-2xl" src={vocabularies[actualQuestion].img}/>
              <input autoComplete="off"
              onChange={(evt) => {setRespuesta(evt.target.value)}}
              placeholder="What it's" className=" p-2 rounded-md placeholder:text-center w-[80%] text-xl border border-[#e6e6e6] mt-4"></input>
              <span className=" text-md text-gray-500 dark:text-gray-400">{vocabularies[actualQuestion].titleSpanish}</span>
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