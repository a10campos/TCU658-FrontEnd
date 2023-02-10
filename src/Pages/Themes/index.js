import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Cards from "../../Components/Cards";
import level from "../../data/themes.json"
import { useParams } from "react-router-dom";

export default function Themes() {
    const {level_id,unit_id} = useParams();
    return (
        <>
            <div>
                <Header></Header>
                <div className="lg:min-h-[450px] min-h-[590px]">
                    <h1 className=" flex items-center justify-center text-4xl font-bold mt-10 mb-8">Themes</h1>
                    <div className=" flex flex-wrap justify-center"> 
                        {
                            level.map((i) => {
                                if (i.id_unit === unit_id) {
                                    return(
                                        <Cards title={i.Description} url={i.img} link={`${level_id}/${unit_id}/${i.id}`}/>
                                    )
                                }
                                return (
                                    <></>
                                )
                               
                            })
                        }
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </>
    );
}