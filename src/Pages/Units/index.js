import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import units from "../../data/units.json"
import Spinner from "../../Components/Spinner";

export default function Units(){
    return(
        <>
            <div>
                <Header></Header>
                <h1 className="border flex items-center justify-center m-2 text-2xl font-bold">Levels</h1>
                <div className="border flex flex-wrap justify-center"> 
                    {
                        units.map((i) => {
                            return(
                              <Cards title={i.NumberUnit} titleSpanish={i.Description} url={i.img} link="units/vocabulary"/>
                            )
                          })
                    }
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}