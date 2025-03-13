import React from "react";
import { Form, Stack, Button } from "react-bootstrap";

const ProjectForm = ({onHandleSave, nameRef, descRef, priceRef, statusRef}) => {

    return(
        <>
            <Form className="pe-4">
                <Stack direction="vertical" className="align-items-start">
                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Project Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Name" ref={nameRef}/>
                    </Form.Group>

                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Project Description
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Description" ref={descRef}/>
                    </Form.Group>

                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Price Per Hour
                        </Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" ref={priceRef}/>
                    </Form.Group>

                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Status
                        </Form.Label>
                        <Form.Select aria-label="" ref={statusRef}>
                            <option value="completed">Completed</option>
                            <option value="ongoing">Ongoing</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="success" className="mt-2" onClick={onHandleSave}>Save Project</Button>

                </Stack>
            </Form>
        </>
    );

}

export default ProjectForm;