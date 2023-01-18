import React,{useState} from "react";
export default function NavMenu () {
    const [showNav,setShowNav] = useState(false)
    return (
        //Header de las imagenes con los logos
        <>
            <nav className="bg-blue">
                <div className="container px-4 flex flex-wrap py-2 mx-auto border">
                    <a href="http://localhost:3000/" className=" text-white inline-flex p-2 text-xl font-bold uppercase tracking-winder">TCU 658</a>
                    <button
                    onClick={()=>setShowNav(!showNav)}
                    className="lg:hidden inline-flex items-center justify-center text-white border h-10 w-10 ml-auto rounded-md outline-none focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </button>
                    <div
                        className={(showNav ? "visible" : "")+"hidden w-full m-3 lg:inline-flex lg:w-auto mt-2 lg:m-auto"} >
                        <ul className="flex flex-col lg:flex-row lg:space-x-2">
                            <li>
                                <a href="http://localhost:3000/" className="flex px-4 py-2 rounded-md font-medium text-white hover:bg-gray">Inicio</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/" className="flex px-4 py-2 rounded-md font-medium text-white hover:bg-gray">Niveles</a>
                            </li>
                            <li>
                                <a href="http://localhost:3000/" className="flex px-4 py-2 rounded-md font-medium text-white hover:bg-gray">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}