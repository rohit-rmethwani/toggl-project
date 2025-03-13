import React, { useState } from "react";
import {Card, Stack,Badge, Button } from "react-bootstrap";


const ProjectCard = () => {

    const [timerId, setTimerId] = useState(0);
    const [totalMinutes, setTotalMinutes] = useState('00');
    const [totalHours, setTotalHours] = useState('00');
    const [timerButtonState, setTimerButtonState] = useState(false);

    // const [data, setData] = useState({});

    var totalSeconds = 0;

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
        setTotalMinutes(pad(totalSeconds % 60));
        setTotalHours(pad(parseInt(totalSeconds / 60)));
    }

    function commitDataToStorage(data){
        console.log("Commiting to storage");
        localStorage.setItem("Time elapsed: ", data);
        console.log(data);
        console.log(localStorage.getItem("Time elapsed"));
    }

    function fetchDataFromStorage(){
        console.log(localStorage.getItem("Time elapsed"));
    }

    //Event Handler
    function handleTimerButton () {
        if(!timerButtonState){
            setTimerId(setInterval(setTime, 1000));
            setTimerButtonState(true);
        }
        else{
            setTimerButtonState(false);
            clearInterval(timerId);
            commitDataToStorage({seconds: totalMinutes, minutes: totalHours});
        }
    }

    return(
        <Card border="primary" className="m-0 p-0 w-100">
            <Card.Header>
                <Stack direction="horizontal" className="justify-content-between">
                    <h3>Project title</h3>
                    <h4>$21</h4>
                </Stack>
            </Card.Header>
            <Card.Body>
                <Stack direction="vertical" className="align-items-start">
                    <Card.Text>This is a description</Card.Text>
                    
                    <h1 className="align-self-center">{totalHours}:{totalMinutes}</h1>
                    
                    <Stack direction="horizontal" className="justify-content-between">
                        <Badge bg="primary">Ongoing</Badge>
                        <Stack direction="horizontal" className="justify-content-start">
                            <Button variant="outline-danger" className="m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                            </Button>

                            <Button variant="outline-warning">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </Button>
                        </Stack>
                    </Stack>
                    
                    <Button variant={!timerButtonState ? "outline-success" : "outline-danger"} className="w-100" onClick={handleTimerButton}>{!timerButtonState ? 'Start Timer' : 'Stop Timer'}</Button>
                    
                </Stack>
            </Card.Body>
        </Card>  
    );
}

export default ProjectCard;