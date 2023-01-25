import {AiFillMail,AiFillPhone,AiFillFacebook} from "react-icons/ai"
export default function Footer () {

    return (
        //Header de las imagenes con los logos
        <>
        <footer className="mt-2 h-32 lg:h-20 bg-gray flex flex-wrap p-7 items-center justify-center ">
                <div className="">
                    <div className="pl-2 grid grid-cols-1 lg:flex lg:flex-row lg:space-x-80">
                        <div className="flex "> 
                            <AiFillMail className="m-1 text-lg "></AiFillMail>
                            <span className="text-lg">tcu658ELM@ucr.ac.cr</span>
                        </div>
                        <div className="flex">
                            <AiFillPhone className="m-1 text-lg"></AiFillPhone>
                            <span className="text-lg">2511-4502</span>
                        </div>
                        <div className="flex">
                            <AiFillFacebook className="m-1 text-lg" ></AiFillFacebook>
                             <span className="text-lg">TCU 658</span>
                        </div>
                    </div> 
                 </div>
        </footer>
        </>
    );
}