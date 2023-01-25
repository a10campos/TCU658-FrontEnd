import NavMenu from "../NavMenu";
export default function Header () {

    return (
        //Header de las imagenes con los logos
        <>
            <div className="bg-white h-25">
                <div className=" flex lg:space-x-72 p-2 items-center justify-center">
                    <div className="bg-yellow hidden lg:flex ">
                        <img alt=""className="h-20" src="https://www.lenguasmodernas.ucr.ac.cr/wp-content/uploads/2018/05/firma-horizontal-una-linea-ucr.png"/>
                    </div>
                    <div className="">
                        <img alt=""  className="h-14 w-15 lg:w-10 lg:h-16" src="https://lenguasmodernas.ucr.ac.cr/wp-content/uploads/2021/04/TCU658_1-149x300.png"/>
                    </div>
                    <div className=" p-2  hidden lg:flex" >
                        <img alt="" className="h-20"src="https://www.lenguasmodernas.ucr.ac.cr/wp-content/uploads/2018/05/Indentificador_horizontal.png"/>
                    </div>
                </div>
            </div>
            <NavMenu></NavMenu>
        </>
    );
}