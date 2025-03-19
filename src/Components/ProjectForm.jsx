import React, { useEffect, useState } from "react";
import { Form, Stack, Button } from "react-bootstrap";
import getIDData from "./Custom Hooks/getIDData";

const ProjectForm = ({onHandleSave, nameRef, descRef, priceRef, statusRef, id}) => {

    const [tempData, setTempData] = useState({name: "", description: "", price_per_hour: "", status: "", elapsed: ""});
    useEffect(()=>{
        if(id){
            const temp = getIDData(id);
            setTempData(temp);
        }
    }, [id]);

    console.log(tempData);

    return(
        <div className="">
            <h1 className="mb-4">{id ? "Update Project" : "Add Project"}</h1>
            <Form className="pe-4">
                <Stack direction="vertical" className="align-items-start">
                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Add project
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Name" ref={nameRef} defaultValue={id?tempData.name:""}/>
                    </Form.Group>

                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Project Description
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Project Description" ref={descRef} defaultValue={id?tempData.description:""}/>
                    </Form.Group>

                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Price Per Hour
                        </Form.Label>
                        <Form.Control type="number" placeholder="Enter Price" ref={priceRef} defaultValue={id?tempData.price_per_hour:""}/>
                    </Form.Group>

                    <Form.Group className="mb-2 text-start w-100">
                        <Form.Label>
                            Status
                        </Form.Label>
                        <Form.Select aria-label="" ref={statusRef} defaultValue={id?tempData.status:""}>
                            <option value="completed">Completed</option>
                            <option value="ongoing">Ongoing</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="outline-primary" className="mt-2 w-100" onClick={onHandleSave}>{id? "Update Project" : "Save Project"}</Button>

                </Stack>
            </Form>
        </div>
    );

}

export default ProjectForm;