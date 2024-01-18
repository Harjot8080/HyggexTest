import React, {useState} from 'react'
import speaker from"../assets/frame2.png"
import bulb from "../assets/frame.png"

const Card = () => {
  const [activeCard, setActiveCard] = useState(false)

  const handleFlip = () => {
    setActiveCard(!activeCard)
  }
  return (
    <>
 
      
        <div 
        onClick={handleFlip}
        className={`h-[393px] rounded-[42px] cursor-pointer relative card ${activeCard? 'cardFlip':''}`}>
            {/* front */}
            
            <div className="flex flex-col justify-start items-center  w-full h-[393px] rounded-[42px] card front " >
        <div className="flex flex-row justify-between px-10 pt-10 w-full">
            <img src={bulb} alt="bulb" />
            <img src={speaker} alt="Speaaker" />
        </div>
        <h4 className="mt-24 text-4xl text-white number font-bold tracking-wide ">9 + 6 + 7x - 2x - 3</h4>
    
    
            </div>

            {/* back */}
            
            
<div className="flex flex-col justify-start items-center  w-full h-[393px] rounded-[42px] card -translate-y-full back absolute top-0" >
        <div className="flex flex-row justify-between px-10 pt-10 w-full">
            <img src={bulb} alt="bulb" />
            <img src={speaker} alt="Speaaker" />
        </div>
        <h4 className="mt-24 text-4xl text-white number font-bold tracking-wide ">5x+12</h4>
    
            </div>
        </div>
  </>
  )
}

export default Card;


