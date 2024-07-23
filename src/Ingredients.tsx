import {Button, ListGroup} from "react-bootstrap";
import {FormEvent, useState} from "react";
import AddNewModal from "./AddNewModal.tsx";

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

interface AddNewIngredientFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

export default function() {

    const [ingredientsList, setIngredientsList] = useState(ingredients)

    function addNewIngredient(event: FormEvent<AddNewIngredientFormElement>) {
        event.preventDefault()
        const name = event.currentTarget.elements.newIngredientName.value
        const unit = event.currentTarget.elements.newIngredientUnit.value
        ingredientsList.push({name: name, unit: unit})
        setIngredientsList(ingredientsList)
        console.log(ingredients)
        hideAddNew()
    }

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
        <AddNewModal show={addNewShown} hideAddNew={hideAddNew} addNewIngredient={addNewIngredient}/>
    </>;
}