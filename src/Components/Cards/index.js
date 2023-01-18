export default function Cards () {

    return (
        //Header de las imagenes con los logos
        <>
            <div className=" m-2 h-[200px] w-[200px] flex flex-col items-center pb-5 pt-2 border rounded-xl bg-white">
                    <img alt=" "class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://thumbs.dreamstime.com/b/cartoon-sun-smiles-good-morning-card-vector-96331767.jpg"/>
                    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">Good morning</h5>
                    <span class="text-sm text-gray-500 dark:text-gray-400">Buenos dias</span>
            </div>
        </>
    );
}