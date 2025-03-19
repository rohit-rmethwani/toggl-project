import React from "react";
import {Stack, Container, Row, Col} from "react-bootstrap";
import ProjectCard from './ProjectCard';

const ProjectListCard = ({projectsData, handleEditAction, handleDeleteAction}) => {
    return(
        <Container fluid>
            <h1 className="mb-4">Projects</h1>
            <Row className="w-100">
                    {projectsData && projectsData.map((data) => {
                        const random = Math.floor(Math.random() * 1000);
                        return <Col key={random} xs={4} className="my-2"><ProjectCard key={data.id} initialData={data} handleEditAction={handleEditAction} handleDeleteAction={handleDeleteAction}/></Col>
                    })}
            </Row>
        </Container>
    );
}

export default ProjectListCard;