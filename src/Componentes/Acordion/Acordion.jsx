import React, { useState, useRef } from "react";
import "./Acordion.scss";

const Acordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);
  console.log(props);
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
       <img style={{width: '70vw', paddingRight:35}}   src={props.img}  onClick={toggleAccordion} />      
   {/* <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        
        <p className="accordion__title">
          {props.title} 
        </p>
     
  </button>*/}
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text">
            {props.children}
        </div>
      </div>
    </div>
  );
}

export default Acordion;
