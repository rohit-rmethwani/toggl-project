import React, { useEffect, useRef, useState } from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectForm from "./ProjectForm";
import ProjectCardList from "./ProjectCardList";
import {Container, Row, Col} from "react-bootstrap";
import getData from "./Custom Hooks/getData";
import getIDData from "./Custom Hooks/getIDData";
import putData from "./Custom Hooks/putData";
import postData from "./Custom Hooks/postData";
import removeData from "./Custom Hooks/removeData";

const ProjectDashboard = () => {
    
    //For form
    const projectName = useRef('');
    const projectDesc = useRef('');
    const pricePerHour = useRef('');
    const projectStatus = useRef('');  

    //State Variable
    const [projectData, setProjectData] = useState(getData()??[]);
    const [init, setInit] = useState(true);
    const [dataId, setDataId] = useState("");

    //Event Handler for Form
    function handleSaveEvent(){
        if(!dataId){
            const randomId = Math.floor(Math.random() * 1000);
            setProjectData([...projectData, {id: randomId, name: projectName.current.value, description: projectDesc.current.value, price_per_hour: pricePerHour.current.value, status: projectStatus.current.value, elapsed: 0}]);
        }
        else{
            const updateTemp = {id: parseInt(dataId), name: projectName.current.value, description: projectDesc.current.value, price_per_hour: pricePerHour.current.value, status: projectStatus.current.value, elapsed: getIDData(dataId).elapsed};
            putData(updateTemp);
            setDataId("");
            setInit(false);
            setProjectData(getData());
        }
        projectName.current.value = "";
        projectDesc.current.value = "";
        pricePerHour.current.value = "";
        projectStatus.current.value = "Completed";
    }

    //Event handler for project card 
    function handleEditAction(evt){
        const uId = evt.currentTarget.getAttribute("data-id");
        setDataId(uId);
    }

    function handleDeleteACtion(evt){
        removeData(parseInt(evt.currentTarget.getAttribute("data-id")));
        setInit(false);
        setProjectData(getData());
    }

    //Saving to local storage
    useEffect(()=>{
        if(init){
            postData(projectData);
        }
    }, [projectData]);

    //Render code
    return(
        <>
            <ProjectHeader/>
            <Container fluid className="py-3">
                <Row>
                    <Col xs={8}><ProjectCardList projectsData={projectData} handleEditAction={handleEditAction} handleDeleteAction={handleDeleteACtion}/></Col>
                    <Col xs={4}><ProjectForm nameRef={projectName} descRef={projectDesc} priceRef={pricePerHour} statusRef={projectStatus} onHandleSave={handleSaveEvent} id={dataId} /></Col>
                </Row>
            </Container>
        </>
    );
}

export default ProjectDashboard;