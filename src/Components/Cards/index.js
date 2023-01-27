import { Link } from "react-router-dom";
export default function Cards (props) {

    return (
        <>
            <Link to={`/${props.link}`}>
                <div className="m-2 h-[200px] w-[200px] relative flex flex-col items-center pb-5 pt-2 rounded-xl bg-white hover:shadow-xl hover:border hover:border-[#e6e6e6]">
                        <img alt=" "class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.url}/>
                        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">{props.title}</h5>
                        <span class="text-sm text-gray-500 dark:text-gray-400">{props.titleSpanish}</span>
                </div>
            </Link>
        </>
    );
}
