import {AiFillMail,AiFillFacebook} from "react-icons/ai"
export default function Footer () {

    return (
        //Header de las imagenes con los logos
        <>
        <footer id="footer"className="mt-2 lg:h-[280px] h-[380px] bg-gray flex flex-wrap p-4 items-center justify-center ">
                <div className="w-[70%] ">
                    <div className="pl-2 grid grid-cols-1 lg:flex lg:flex-row lg:space-x-96 mt-4">
                        <div className="">
                            <h2 className="text-blue text-2xl">Contacto</h2>
                            <div className="flex mt-4">
                                <AiFillMail className="m-1 text-lg "></AiFillMail>
                                <span className="text-lg">tcu658ELM@ucr.ac.cr</span>
                            </div>
                            <a className = "flex mt-1 mb-4"href = "https://www.facebook.com/TCU658UCR/">
                                <AiFillFacebook className="m-1 text-lg" ></AiFillFacebook>
                                <span className="text-lg">TCU 658</span>
                            </a>
                        </div>
                        <div className="">
                            <h2 className="text-blue text-2xl ">Créditos</h2>
                            <div className="flex-col justify-end items-center">
                                <p class="mt-4">Universidad de Costa Rica</p>
                                <p class="mt-1">Escuela de Lenguas Modernas</p>
                                <p class="mt-1">TCU-658</p>
                                <p class="mt-1"> Proyecto de TCU de Aarón Campos Ramírez</p>
                            </div>
                        </div>
                    </div> 
                    
                    <p className="text-center lg:mt-8">Julio-2023 </p>
                    
                 </div>
                 <div className="">
                    <p className="text-center lg:mt-2">Imagenes tomadas de <a href ="https://creazilla.com/">https://creazilla.com/</a> sin derechos de autor. </p>
                    </div>

        </footer>
        </>
    );
}