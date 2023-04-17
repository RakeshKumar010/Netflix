import React, { useState } from "react";
const Accordion = (props: { head: string; message: string; id:string }) => {
  const [show, setShow] = useState(false);
//   const [style, setStyle] = useState({ "rotate": "0deg"});
  const clinkFun = () => {
    setShow(!show);

  
  };
  return (
    <>
      <div className="accordion" key={props.id}>
        <p className="accordionhead" onClick={clinkFun}>
          {props.head} <span className={show?"addrotateClass":"addClass"}>+</span>
        </p>
        {show && <p className="accordionmessage">{props.message}</p> }
        
      </div>
    </>
  );
};

export default Accordion;
