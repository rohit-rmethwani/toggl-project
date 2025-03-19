import React, { useEffect, useState } from "react";
import {Card, Stack,Badge, Button } from "react-bootstrap";
import Timer from "./Timer";
import putData from "./Custom Hooks/putData";
import getIDData from "./Custom Hooks/getIDData";


const ProjectCard = ({initialData, handleEditAction, handleDeleteAction}) => {

    //Variables
    const [timerButtonState, setTimerButtonState] = useState(false);
    const [data, setData] = useState(initialData);
    const [timeElapsed, setElapsedTime] = useState(initialData.elapsed);
    const [runningSince, setRunningSince] = useState(0);
    const [isInit, setInit] = useState(true);

    //Event Handler
    function handleTimerButton () {
        if(!timerButtonState){
            setRunningSince(Date.now());
            setTimerButtonState(true);
        }
        else{
            setElapsedTime(timeElapsed + Math.floor((Date.now() - runningSince)/1000) * 1000);
            setInit(false);
            setTimerButtonState(false);
        }
    }

    //Commiting
    useEffect(()=>{
        if(!isInit){
            putData({...initialData, elapsed: timeElapsed});
        }
    }, [timeElapsed]);

    return(
        <Card className="m-0 p-0 inline-block" data-id={initialData.id}>
            <Card.Header>
                <Stack direction="horizontal" className="justify-content-between">
                    <h3>{data.name}</h3>
                    <h4>{data.price_per_hour}</h4>
                </Stack>
            </Card.Header>
            <Card.Body>
                <Stack direction="vertical" className="align-items-start">
                    <Card.Text>{data.description}</Card.Text>
                    
                    <Timer state={timerButtonState} initialData={initialData}/>

                    <Stack direction="horizontal" className="justify-content-between">
                        <Badge bg={initialData.status == "Ongoing" ? "info" : "success"}>{data.status}</Badge>
                        <Stack direction="horizontal" className="justify-content-start">
                            <Button variant="outline-danger" className="m-2" data-id={initialData.id} onClick={handleDeleteAction}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                            </svg>
                            </Button>

                            <Button variant="outline-warning" data-id={initialData.id} onClick={handleEditAction}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                                </svg>
                            </Button>
                        </Stack>
                    </Stack>
                    
                    <Button variant={!timerButtonState ? "outline-primary" : "outline-secondary"} className="w-100" onClick={handleTimerButton} disabled={initialData.status == "Completed"}>{!timerButtonState ? 'Start Timer' : 'Pause Timer'}</Button>
                    
                </Stack>
            </Card.Body>
        </Card>  
    );
}

export default ProjectCard;