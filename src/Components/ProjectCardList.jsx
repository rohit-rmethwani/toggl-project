import React from "react";
import {Stack, Container, Row, Col} from "react-bootstrap";
import ProjectCard from './ProjectCard';

const ProjectListCard = ({projectsData, secondsRef, minutesRef}) => {
    
    const tempData = projectsData[0];

    return(
        <Container fluid>
            <Row className='w-100'>
                <Col>
                    <ProjectCard initialData={tempData} secondsRef={secondsRef} minutesRef={minutesRef}/>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectListCard;