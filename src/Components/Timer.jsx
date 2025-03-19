import React, { useEffect, useState } from "react";

const Timer = ({state, elapsed}) => {

    //Variables
    const [timerId, setTimerId] = useState(0);
    const [totalHours, setTotalHours] = useState("00");
    const [totalSeconds, setTotalSeconds] = useState("00");
    const [totalMinutes, setTotalMinutes] = useState("00"); 
    const [init, setInit] = useState(false);
    var secs = totalMinutes;
  
    //Utilities functions
    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      }

    function setTime(){
        setTotalSeconds(++secs);
    }

    useEffect(()=>{
      if(state){
        setTimerId(setInterval(setTime, 1000));
      }
      else{
        setTotalSeconds(totalSeconds);
        clearInterval(timerId);
      }
    },[state]);

    return(
        <h1 className="align-self-center">{totalHours}:{totalMinutes}:{totalSeconds}</h1>
    );

}

export default Timer;