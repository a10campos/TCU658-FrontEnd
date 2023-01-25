export default function Cards (props) {

    return (
        <>
                <div className="group h-[200px] w-[200px] [perspective:1000px] m-2 mb-10 rounded-xl bg-white flex flex-col">
                    <div onClick="" className="relative h-full w-full rounded-2xl border shadow-xl border-[#e6e6e6]  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className="flex flex-col inset-0 object-cover h-full w-full rounded-xl justify-center items-center [backface-visibility:hidden]">
                                <img alt=" "class="w-24 h-24 rounded-full shadow-xl" src={props.url}/>
                                <h5 class="mb-1 text-xl font-medium text-gray-900 mt-2">{props.title}</h5>
                                <span class="text-sm text-gray-500 dark:text-gray-400 mt-1">{props.titleSpanish}</span>
                        </div>
                        {/*Card back */}
                        <div className="absolute inset-0 h-full w-full rounded-2xl shadow-xl bg-blue text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className="flex items-center justify-center w-full h-full">
                                <h1> Saludo informal entre las 5pm a las 6pm de la tarde </h1>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
