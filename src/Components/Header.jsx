import Logo from"../assets/Logo.png"

function Header() {
    return(<>
    <div className=" flex flex-row items-center">
    <div className="grow ">
        <img className="h-[39px] mx-1 mt-1" alt="Logo" src={Logo} />
        </div>
    <ul className="mr-5">
        <li className="inline p-5 text-[#3A3740] text-lg font-normal tracking-wide">Home</li>
        <li className="inline p-5 text-[#3A3740] text-lg font-normal tracking-wide">Flashcard</li>
        <li className="inline p-5 text-[#3A3740] text-lg font-normal tracking-wide">Contact</li>
        <li className="inline p-5 text-[#3A3740] text-lg font-normal tracking-wide">FAQ</li>
    </ul>
    <button className="text-white bg-gradient-to-b from-[#06286E] to-[#164EC0] h-10 w-32 rounded-3xl">Login</button>

    </div>
    </>
    );
}
export default Header;