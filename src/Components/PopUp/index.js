import { Link } from "react-router-dom"
export default function PopUp(props) {
    
    return (
        <div className="bg-[#373a47] fixed top-0 left-0 w-full h-full opacity-100">  
        <div className=" flex flex-col items-center min-h-[200px] max-h-[300px] max-w-[5500px] min-w-[300px] bg-white fixed left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] p-8 rounded"> 
            <h3 className="mb-2">Quiz Summary</h3>
            <p>Correctas: {props.score}</p>
            <p>Incorrectas: {props.questions}</p>
            <Link to={props.url}>
                <button className="  bg-[#00BB2D] p-2 mt-2 ">Aceptar</button>
            </Link>
            
        </div>
        </div>
    )
} 