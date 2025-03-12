import React from "react";
import { Form, Stack, Button } from "react-bootstrap";

const ProjectForm = () => {

    return(
        <>
            <Form>
                <Stack direction="vertical" className="align-items-start">
                    <Form.Group className="m-2 text-start w-100">
                        <Form.Label>
                            Project Name
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Name"/>
                    </Form.Group>

                    <Form.Group className="m-2 text-start w-100">
                        <Form.Label>
                            Project Description
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Description"/>
                    </Form.Group>

                    <Form.Group className="m-2 text-start w-100">
                        <Form.Label>
                            Price Per Hour
                        </Form.Label>
                        <Form.Control type="number" placeholder="Enter Project Description"/>
                    </Form.Group>

                    <Form.Group className="m-2 text-start w-100">
                        <Form.Label>
                            Status
                        </Form.Label>
                        <Form.Select aria-label="Completed">
                            <option value="completed">Completed</option>
                            <option value="ongoing">Ongoing</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="success" className="m-2">Save Project</Button>

                </Stack>
            </Form>
        </>
    );

}

export default ProjectForm;