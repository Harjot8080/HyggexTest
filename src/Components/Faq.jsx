import Accordion from "./Accordion";

export default function Faq(){

  const faq=[{
    Question:"Can education flashcards be used for all age groups?",
    answer:"Yes,education flashcards can be tailored to different age groups and learning level"
  },
  {
    Question:"How do education flashcards work?",
    answer:"Yes,education flashcards can be tailored to different age groups and learning level"

  },
  {
    Question:"Can education flashcards be used for test preparation?",
    answer:"Yes,education flashcards can be tailored to different age groups and learning level"
  }
]

const list = faq.map((data,index)=>{
  return(
  <Accordion 
  question={data.Question}
  answer={data.answer}
  key={index}/>
);
}
);

    return(<>
    <div className="mt-40 mx-5">
        <h2 className="text-5xl  font-bold bg-gradient-to-b from-[#06286E] to-[#164EC0]  text-transparent bg-clip-text">FAQ</h2>
        
      <div className="w-[843px]  mt-10">
      {list}
      </div>
      
        </div></>)
}