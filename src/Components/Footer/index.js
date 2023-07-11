import {AiFillMail,AiFillFacebook} from "react-icons/ai"
export default function Footer () {

    return (
        //Header de las imagenes con los logos
        <>
        <footer id="footer"className="mt-2 h-36 lg:h-[200px] bg-gray flex flex-wrap p-7 items-center justify-center ">
                <div className="">
                    <div className="pl-2 grid grid-cols-1 lg:flex lg:flex-row lg:space-x-96 mt-4">
                        <div className="flex  ">
                            <AiFillMail className="m-1 text-lg "></AiFillMail>
                            <span className="text-lg">tcu658ELM@ucr.ac.cr</span>
                        </div>
                        <a className = "flex "href = "https://www.facebook.com/TCU658UCR/">
                            <AiFillFacebook className="m-1 text-lg" ></AiFillFacebook>
                             <span className="text-lg">TCU 658</span>
                        </a>
                    </div> 
                    <div className="flex justify-center items-center mt-10 ">
                        <p> Proyecto de TCU de Aarón Campos Ramírez</p>
                    </div>
                    <div className="flex justify-center items-center m-1">
                        <p>Julio-2023 </p>
                    </div>
                 </div>
                 
        </footer>
        </>
    );
}