export default function Cards (props) {

    return (
        <>

            <div className=" m-2 h-[200px] w-[200px] flex flex-col items-center pb-5 pt-2 border rounded-xl bg-white">
                    <a href={`/${props.link}`}> <img alt=" "class="w-24 h-24 mb-3 rounded-full shadow-lg" src={props.url}/></a>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">{props.title}</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">{props.titleSpanish}</span>
            </div>
        </>
    );
}
