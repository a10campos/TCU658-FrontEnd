export default function Cards (props) {

    return (
        <>
                <div className="group h-[210px] w-[260px] [perspective:1000px] m-2 mb-10 rounded-xl bg-white flex flex-col">
                    <div onClick="" className=" crelative h-full w-full rounded-2xl border shadow-xl border-[#e6e6e6]  transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                        <div className=" flex flex-col inset-0 object-cover h-full w-full rounded-xl  items-center justify-center [backface-visibility:hidden]">
                                <img alt=" "className=" mt-4 w-32 h-32 rounded-xl shadow-2xl" src={props.url}/>
                                    <h5 className="first-letter:mb-1 text-xl font-bold text-gray-900 mt-2 text-center">{props.title}</h5>
                        </div>
                        {/*Card back */}
                        <div className="absolute inset-0 h-full w-full rounded-2xl shadow-xl bg-blue text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                            <div className="flex items-center justify-center w-full h-full">
                                <h1> {props.titleSpanish}</h1>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
