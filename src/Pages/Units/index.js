import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import units from "../../data/units.json"

export default function Units(){
    return(
        <>
            <div>
                <Header></Header>
                <h1 className=" flex items-center justify-center m-4 text-4xl font-bold">Units</h1>
                <div className=" flex flex-wrap justify-center"> 
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