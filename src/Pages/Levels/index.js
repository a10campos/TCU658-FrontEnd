import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import level from "../../data/levels.json"

export default function Levels() {
    return(
        <>
            <div>
                <Header></Header>
                <h1 className=" flex items-center justify-center m-4 text-4xl font-bold">Levels</h1>
                <div className=" flex flex-wrap justify-center"> 
                    {
                        level.map((i) => {
                            return(
                              <Cards title={i.Description} url={i.img} link="units"/>
                            )
                          })
                    }
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}
