import React, { useEffect, useState } from "react";

const Timer = ({state, initialData}) => {

    //Variables
    const [timerId, setTimerId] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState("00");
    const [totalHours, setTotalHours] = useState("00"); 
    const [init, setInit] = useState(false);
    var totalSeconds = totalMinutes;

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
        setTotalMinutes(++totalSeconds);
    }

    useEffect(()=>{

      if(state){
        setTimerId(setInterval(setTime, 1000));
      }
      else{
        setTotalMinutes(totalSeconds);
        clearInterval(timerId);
      }
      
    },[state]);

    return(
        <h1 className="align-self-center">00:<span>{totalHours}</span>:<span>{totalMinutes}</span></h1>
    );

}

export default Timer;