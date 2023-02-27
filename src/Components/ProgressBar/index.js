export default function ProgressBar (props) {
    return (
        <>
            <div class="mb-1 text-base font-medium dark:text-white">Default</div>
            <div class="w-[350px] bg-gray rounded-full h-2.5 mb-4">
                <div class="bg-blue h-2.5 rounded-full " style={{width: `${props.state}%`}}></div>
            </div>

        </>
    );
}