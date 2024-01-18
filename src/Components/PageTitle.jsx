import arrow from "../assets/Vector.png"
import home from "../assets/Vector2.png"


export default function PageTitle(){

    const last=" text-lg inline mx-1 font-bold text-[#06286E] tracking-wide"
    const first=" text-lg inline mx-1 font-medium text-[#696671] tracking-wide" 
    const breadcrum=["FlashCard","Mathematics","Relation and Function"]
 const list= breadcrum.map((value,key)=>{
   
    return(<>
    <img className="h-3 inline mx-1 -translate-y-1/4 " key={key} src={arrow}></img>
     <h2 className={key==breadcrum.length-1?last:first} key={key+50}>{value}</h2>
</>
) });
    return(<>
    <div className="mt-16">
        
        <div>
                <img className="inline -translate-y-1/4  mx-1"src={home} alt="Home" />
            {list}
        </div>
        <h1 className="mt-16 text-3xl bg-gradient-to-b from-[#06286E] to-[#164EC0] inline-block text-transparent bg-clip-text font-bold tracking-widest">Relations and Functions ( Mathematics )</h1>
        </div>
        </>
        )
}