import {Button, ListGroup, Modal, ModalDialog} from "react-bootstrap";
import React, {useState} from "react";

export default function() {

    const ingredients = [
        {"name": "Pepper", "unit": "g"},
        {"name": "Salt", "unit": "g"},
        {"name": "Sugar", "unit": "g"},
        {"name": "Flour", "unit": "g"},
        {"name": "Butter", "unit": "g"},
        {"name": "Milk", "unit": "ml"},
        {"name": "Egg", "unit": "piece"},
        {"name": "Baking Powder", "unit": "g"},
        {"name": "Olive Oil", "unit": "ml"},
        {"name": "Garlic", "unit": "clove"}
    ]

    function hideAddNew() {
        setAddNewShown(false)
    }

    const AddNewModal = () => <Modal show={addNewShown}>
        <Modal.Footer>
            <Button onClick={hideAddNew}>Close</Button>
        </Modal.Footer>
    </Modal>

    const [addNewShown, setAddNewShown] = useState(false)

    function showAddNew() {
        setAddNewShown(true)
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