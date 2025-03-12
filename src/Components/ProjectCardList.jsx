import React from "react";
import {Stack, Container, Row, Col} from "react-bootstrap";
import ProjectCard from './ProjectCard';

const ProjectListCard = () => {
    return(
        <Container fluid>
            <Row className='w-100'>
                <Col className='w-100'>
                    <ProjectCard className='w-100'/>
                </Col>
                <Col className='w-100'>
                    <ProjectCard className='w-100'/>
                </Col>
                <Col className='w-100'>
                    <ProjectCard className='w-100'/>
                </Col>
                <Col className='w-100'>
                    <ProjectCard className='w-100'/>
                </Col>
            </Row>
        </Container>
    );
}

export default ProjectListCard;