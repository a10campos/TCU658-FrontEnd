import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import level from "../../data/levels.json"

export default function Levels() {
    return(
        <>
            <div>
                <Header></Header>
                <h1 className="border flex items-center justify-center m-2 text-2xl font-bold">Levels</h1>
                <div className="border flex flex-wrap justify-center"> 
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
