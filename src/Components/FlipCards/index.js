export default function Cards (props) {

    return (
        <>
                <div className="group h-[200px] w-[200px] [perspective:1000px] m-2">
                    <div className="relative h-full w-full rounded-xl shadow-xl  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] pointer-events-auto">
                        <div className="flex flex-col inset-0 object-cover h-full w-full border rounded-xl justify-center items-center">
                                <img alt=" "class="w-24 h-24 rounded-full shadow-xl" src={props.url}/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900">{props.title}</h5>
                                <span class="text-sm text-gray-500 dark:text-gray-400">{props.titleSpanish}</span>
                        </div>
                        {/*Card back */}
                        <div className="absolute inset-0 h-full w-full rounded-xl bg-blue text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className="flex items-center justify-center border w-full h-full">
                                <h1> Saludo informal </h1>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
