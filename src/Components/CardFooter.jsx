import Add from "../assets/Add.png"
import Logo from "../assets/ClipLogo.png"
import CompanyName from "../assets/CompanyName.png"
export default function CardFooter(){
    return(<>
    <div className="flex flex-row justify-between items-center ">
    <div className="mt-20 flex flex-row">
        <div className="flex justify-center items-center shadow-[0px_0px_31px_0px_#08389966] w-20 h-20 rounded-full mx-5 text-center">
        <img src={Logo} alt="Logo" />
        </div>
        <div className="mt-1">
            <p className="text-xs text-[#696671] font-bold">Published by</p>
        <img className="h-8 mt-2"src={CompanyName} alt="Company" />

        </div>
        </div>
        <div className="mt-20 flex flex-row items-center ">
            <img className="w-[60] h-auto mx-4"src={Add} alt="Addicon" />
            <h5 className="text-[28px]  bg-gradient-to-b from-[#06286E] to-[#164EC0] font-semibold text-transparent bg-clip-text">Create Flashcard</h5>
        </div>
    </div>
    </>)
}

