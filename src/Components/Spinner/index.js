import {ImSpinner2} from "react-icons/im"

export default function Spinner() {
    return (
        <>
            <div className="flex justify-center items-center">
                <ImSpinner2 className="animate-spin h-20 w-40 mx-auto text-blue"></ImSpinner2>
                <span className="hidden">Loading...</span>
            </div>
        </>
    )
}