import React, { useEffect, useRef, useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectForm from "./ProjectForm";
import ProjectCardList from "./ProjectCardList";
import {Container, Row, Col} from "react-bootstrap";

const ProjectDashboard = () => {

    //Variables
    
    //For form
    const projectName = useRef('');
    const projectDesc = useRef('');
    const pricePerHour = useRef('');
    const projectStatus = useRef('');  

    //For project card
    const timeSeconds = useRef('');
    const timeMinutes = useRef('');


    //State Variable
    const [projectData, setProjectData] = useState(JSON.parse(localStorage.getItem("Toggl")) ?? []);
    const [init, setInit] = useState(true);

    //Event Handler for Form
    function handleSaveEvent(){
        const randomId = Math.floor(Math.random() * 1000);
        setProjectData([...projectData, 
            {id: randomId, name: projectName.current.value, description: projectDesc.current.value, price_per_hour: pricePerHour.current.value, status: projectStatus.current.value, seconds: "00", minutes: "00"}]);
        projectName.current.value = "";
        projectDesc.current.value = "";
        pricePerHour.current.value = "";
        projectStatus.current.value = "";
    }

    //Saving to local storage
    useEffect(()=>{
        if(!init){
            localStorage.setItem("Toggl", JSON.stringify(projectData));
        }
        else{
            setInit(false);
        }
    }, [projectData]);

    //Render code
    return(
        <>
            <ProjectHeader/>
            <Container fluid className="py-3">
                <Row>
                    <Col xs={8}><ProjectCardList projectsData={projectData} secondsRef={timeSeconds} minutesRef={timeMinutes}/></Col>
                    <Col xs={4}><ProjectForm nameRef={projectName} descRef={projectDesc} priceRef={pricePerHour} statusRef={projectStatus} onHandleSave={handleSaveEvent}/></Col>
                </Row>
            </Container>
        </>
    );
}

export default ProjectDashboard;