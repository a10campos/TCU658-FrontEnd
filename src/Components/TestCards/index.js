import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../../store/slices/Score";

export default function TestCards(props) {
    const [respuesta,setRespuesta ] = useState ("");
    let julio
    const {score} = useSelector (state => state.score) 
    const dispatch = useDispatch();
    function Comprobar () {
        if (respuesta.toLowerCase()===props.title.toLowerCase()) {
            julio = true;
            dispatch(increment());
            
        }
    }
    return (
        <>
            <div className="flex-row">{score}</div>
            { 
            julio ?
             <div className="border bg-green-700  flex flex-col h-[250px] w-[200px] rounded-xl items-center m-2">
                <img alt=" "className=" mt-4 w-32 h-32 rounded-xl shadow-2xl" src={props.url}/>
                <input onChange={(evt) => {setRespuesta(evt.target.value)}} 
                placeholder="What it's" className=" p-2 rounded-md placeholder:text-center w-[80%] text-xl border border-[#e6e6e6] mt-4"></input>
                <span className=" text-md text-gray-500 dark:text-gray-400">{props.titleSpanish}</span>
                
            </div> : 
            <div className="border flex flex-col h-[250px] w-[200px] rounded-xl items-center m-2">
                <img alt=" "className=" mt-4 w-32 h-32 rounded-xl shadow-2xl" src={props.url}/>
                <input onChange={(evt) => {setRespuesta(evt.target.value)}} 
                placeholder="What it's" className=" p-2 rounded-md placeholder:text-center w-[80%] text-xl border border-[#e6e6e6] mt-4"></input>
                <span className=" text-md text-gray-500 dark:text-gray-400">{props.titleSpanish}</span>
                <button className="border m-2 p-1 rounded-md bg-blue color-white" onClick={Comprobar}>Comprobar</button>
            </div>
            }
        </> 
    );
}