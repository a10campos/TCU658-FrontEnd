import NavMenu from "../NavMenu";

export default function Header () {

    return (
        //Header de las imagenes con los logos
        <>
            <div className="bg-white h-25 ">
                <div className=" flex space-x-72 border p-2">
                    <div className="bg-yellow">
                        <img alt=""className="border h-20" src="https://www.lenguasmodernas.ucr.ac.cr/wp-content/uploads/2018/05/firma-horizontal-una-linea-ucr.png"/>
                    </div>
                    <div className="border">
                        <img alt=""  className="border h-20" src="https://lenguasmodernas.ucr.ac.cr/wp-content/uploads/2021/04/TCU658_1-149x300.png"/>
                    </div>
                    <div className=" p-2">
                        <img alt="" className="border h-20"src="https://www.lenguasmodernas.ucr.ac.cr/wp-content/uploads/2018/05/Indentificador_horizontal.png"/>
                    </div>
                </div>
            </div>
            <NavMenu></NavMenu>
        </>
    );
}