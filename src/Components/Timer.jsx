import React from "react";

const Timer = ({totalMinutes, totalSeconds}) => {

    //Variables
    const [timerId, setTimerId] = useState(0);
    const [minutes, setMinutes] = useState(initialData.minutes);
    const [seconds, setSeconds] = useState(initialData.seconds);


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
        ++totalSeconds;
        setMinutes(pad(totalSeconds % 60));
        setSeconds(pad(parseInt(totalSeconds / 60)));
    }
    

    return(
        <h1 className="align-self-center"><span>{minutes}</span>:<span>{seconds}</span></h1>
    );

}

export default Timer;