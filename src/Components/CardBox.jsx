import Card from"../Components/Card"
import retry from"../assets/retry.png"
import right from "../assets/right.png"
import left from "../assets/left.png"
import enlarge from "../assets/enlarge.png"
export default function CardBox(){
    return(<>
    <div className="grid grid-cols-1 justify-items-center mt-14  ">
    <form>
<input className="hidden " type="radio" id="tg-1" name="lang" value="HTML" defaultChecked/>
<label className="text-[20px] cursor-pointer px-2 pb-1  mx-7 font-medium text-[#696671]  label-1" htmlFor="tg-1">Study</label>
    
<input className="hidden " type="radio" id="tg-2" name="lang" value="CSS" />
<label className=" text-[20px] cursor-pointer mx-7 mt-14 font-medium text-[#696671]  label-2 " htmlFor="tg-2" >Quiz</label>
    
<input className="hidden " type="radio" id="tg-3" name="lang" value="JavaScript" />
<label className="text-[20px] cursor-pointer mx-7 mt-14 font-medium text-[#696671]  label-3" htmlFor="tg-3">Test</label>     
<input className="hidden " type="radio" id="tg-4" name="lang" value="JavaScript" />
<label className="text-[20px] cursor-pointer mx-7 mt-14 font-medium text-[#696671]  label-4" htmlFor="tg-4">Game</label>     
<input className="hidden " type="radio" id="tg-5" name="lang" value="JavaScript" />
<label className="text-[20px] cursor-pointer mx-7 mt-14 font-medium text-[#696671]  label-5" htmlFor="tg-5">Other</label>     
</form>



<div className="w-[712px] h-[485px] mt-9">
    <Card/>
    <div className="flex flex-row w-full justify-around pt-10">
        <img className="h-9 translate-y-2 "src={retry} alt="" />
        <div className="flex flex-row items-center -translate-x-1 -translate-y-1 justify-between w-1/3">
        <img src={left} alt="" />
        <h1 className="text-[#202B37] text-2xl font-bold">01/10</h1>
        <img src={right} alt="" />

        </div>
        <img className="h-9 translate-y-2" src={enlarge} alt="" />
    </div>
</div>


    </div>
        </>)
}

