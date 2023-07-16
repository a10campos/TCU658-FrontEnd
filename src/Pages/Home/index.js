import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
export default function Levels() {
    return(
        <>
            <div>
                <Header></Header>
                <h1 className=" flex items-center justify-center text-4xl font-bold mt-10 mb-8">Instructions</h1>
                <div className="flex flex-wrap justify-center">

                    <div className="h-[250px] w-[300px] rounded-md shadow-[0_2px_4px_0px_rgba(0,0,0,0.5)] flex justify-center items-center m-2 p-2">
                        <p className="text-center text-lg">This app is designed for seventh-grade students to practice vocabulary and expressions from units 1 and 2.</p>
                    </div>

                    <div className="h-[250px] w-[300px] rounded-md shadow-[0_2px_4px_0px_rgba(0,0,0,0.5)] m-2 flex justify-center items-center p-2">
                        <p className="text-center text-lg ">You can study and review English words and expressions using pictures. </p>
                    </div>

                    <div className="h-[250px] w-[300px] rounded-md shadow-[0_2px_4px_0px_rgba(0,0,0,0.5)] m-2 flex justify-center items-center p-2">
                        <p className="text-center text-lg ">Clicking on the pictures will show you the Spanish translation.</p>
                    </div>

                    <div className="h-[250px] w-[300px] rounded-md shadow-[0_2px_4px_0px_rgba(0,0,0,0.5)] m-2 flex justify-center items-center p-2">
                         <p className="text-center text-lg">Once you have studied everything, you can do some exercises.</p>
                    </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href={`/levels`}>
                            <button className=" m-4 rounded-md text-white bg-blue w-60 h-14">Let's go!</button>
                        </a>
                    </div>
                <Footer></Footer>
            </div>
        </>
    )
}