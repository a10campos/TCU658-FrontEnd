import { useState } from "react";

export default function TestCards(props) {
    const [respuesta,setRespuesta ] = useState ("");
    let julio


    if (respuesta.toLowerCase()===props.title.toLowerCase()) {
        julio = true; 
    }
    return (
        <>
            { julio ?
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
            </div>
            }
        </> 
    );
}