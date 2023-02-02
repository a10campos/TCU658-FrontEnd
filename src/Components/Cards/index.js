import { Link } from "react-router-dom";
export default function Cards (props) {

    return (
        <>
            <Link to={`/${props.link}`}>
                <div className="bg-transparent m-2">
                    <div className="flex bg-[#f6f6f6] rounded-md shadow-[0_2px_4px_0px_rgba(0,0,0,0.5)] overflow-hidden min-h-[86px]">      
                        <div className="flex flex-col whitespace-nowrap overflow-hidden text-ellipsis">
                            <div className="relative rounded-[0px]">
                                <div className="w-[200px] h-[225px] bg-white flex items-center justify-center">
                                    <img alt=" "className="w-[100%] h-auto object-center object-cover" src={props.url}/>
                                </div>

                            </div>
                                <div className="flex max-w-[300px] font-semibold leading-5 box-border text-ellipsis overflow-hidden py-4 text-2xl justify-center">
                                {props.title}
                                </div>
                                <span class="text-sm text-gray-500 text-center pb-1 ">{props.titleSpanish}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );

    //<img alt=" "className="h-32 w-32" src={props.url}/>
    //<h5 class="mb-1 text-3xl font-bold text-gray-900">{props.title}</h5>
    //<span class="text-sm text-gray-500">{props.titleSpanish}</span>
}
