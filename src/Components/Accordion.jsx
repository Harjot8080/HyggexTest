import React, { useState } from "react";
import dropdown from "../assets/dropdown.png"
const Accordion = ( props ) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

 
  
  

  return (
    <div className=" w-full mt-8 bg-gradient-to-r from-[#217EEC] to-[#082299] flex items-center justify-center rounded-xl ">
    <div className=" p-4 m-px w-[842px] bg-white  rounded-xl min-h-[58px] ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        <span  className="text-base font-bold text-[#28262C]">{props.question}</span>
        <img className={`mr-1 mt-2 transform origin-center transition ease-out ${ accordionOpen && "flip"}`}src={dropdown} alt="drop" />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out mt-2  text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden text-[#28262C]">{props.answer}</div>
      </div>
    </div>

    </div>
  );
};

export default Accordion;

