import {Button, Form, ListGroup, Modal} from "react-bootstrap";
import React, {useState} from "react";

const ingredients = [
    {"name": "Pepper", "unit": "g"},
    {"name": "Salt", "unit": "g"},
    {"name": "Milk", "unit": "ml"},
    {"name": "Egg", "unit": "piece"},
    {"name": "Olive Oil", "unit": "ml"},
    {"name": "Garlic", "unit": "clove"}
]

interface FormElements extends HTMLFormControlsCollection {
    newIngredientName: HTMLInputElement,
    newIngredientUnit: HTMLInputElement
}

interface AddNewIngredientFormElement {
    readonly elements: FormElements
}

export default function() {

    const [ingredientsList, setIngredientsList] = useState(ingredients)

    function addNewIngredient(event: React.FormEvent<AddNewIngredientFormElement>) {
        event.preventDefault()
        const name = event.currentTarget.elements.newIngredientName.value
        const unit = event.currentTarget.elements.newIngredientUnit.value
        ingredientsList.push({name: name, unit: unit})
        setIngredientsList(ingredientsList)
        console.log(ingredients)
        hideAddNew()
    }

    const AddNewModal = () => <Modal show={addNewShown} onHide={hideAddNew}>
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

    const [addNewShown, setAddNewShown] = useState(false)

    function showAddNew() {
        setAddNewShown(true)
    }

    function hideAddNew() {
        setAddNewShown(false)
    }

    return <>
        <h3>Ingredients</h3>
        <ListGroup>
            {ingredients.map(ingredient => (<ListGroup.Item>{ingredient.name} [{ingredient.unit}]</ListGroup.Item>))}
        </ListGroup>
        <Button className={"my-3"} onClick={showAddNew}>Add new</Button>
        <AddNewModal/>
    </>;
}