import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import units from "../../data/units.json";
import {useParams} from 'react-router-dom';

export default function Units(){
    const {level_id} = useParams();
    return(
        <>
            <div>
                <Header></Header>
                <h1 className=" flex items-center justify-center m-4 text-4xl font-bold mt-10 mb-8">Units</h1>
                <div className=" flex flex-wrap justify-center"> 
                    {
                        units.map((i) => {
                            if (i.idLevel === level_id){
                                return(
                                    <Cards title={i.NumberUnit} titleSpanish={i.Description} url={i.img} link={`${level_id}/${i.id}`}/>
                                )
                            }
                            return(
                                <></>
                            )
                          })
                    }
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}