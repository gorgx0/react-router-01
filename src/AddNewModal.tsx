import {Button, Form, Modal} from "react-bootstrap";
import {FormEventHandler} from "react";

export default function AddNewModal({show, hideAddNew, addNewIngredient}:{
    show:boolean,
    hideAddNew: ()=>void,
    addNewIngredient: FormEventHandler<HTMLFormElement>

}) {
    return <Modal show={show} onHide={hideAddNew}>
        <Modal.Header closeButton>
            <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Form onSubmit={addNewIngredient}>
            <Modal.Body>
                <Form.Group controlId={"newIngredientName"}>
                    <Form.Label>Add new ingredient</Form.Label>
                    <Form.Control type={"text"} placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId={"newIngredientUnit"}>
                    <Form.Label>Unit of measure</Form.Label>
                    <Form.Control type={"text"} placeholder="Enter unit" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button type={"submit"}>Add</Button>
                <Button onClick={hideAddNew}>Close</Button>
            </Modal.Footer>
        </Form>
    </Modal>

}