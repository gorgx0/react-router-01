import {Button, ListGroup} from "react-bootstrap";
import {FormEvent, useContext, useState} from "react";
import AddNewModal from "./AddNewModal.tsx";
import {DataContext} from "./DataContext.tsx";

interface FormElements extends HTMLFormControlsCollection {
    newIngredientName: HTMLInputElement,
    newIngredientUnit: HTMLInputElement
}

interface AddNewIngredientFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

export default function Ingredients() {

    const data = useContext(DataContext)

    const [ingredientsList, setIngredientsList] = useState(data.ingredients)

    function addNewIngredient(event: FormEvent<AddNewIngredientFormElement>) {
        event.preventDefault()
        const name = event.currentTarget.elements.newIngredientName.value
        const unit = event.currentTarget.elements.newIngredientUnit.value
        ingredientsList.push({name: name, unit: unit})
        setIngredientsList(ingredientsList)
        console.log(ingredientsList)
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
            {data.ingredients.map(ingredient => (<ListGroup.Item>{ingredient.name} [{ingredient.unit}]</ListGroup.Item>))}
        </ListGroup>
        <Button className={"my-3"} onClick={showAddNew}>Add new</Button>
        <AddNewModal show={addNewShown} hideAddNew={hideAddNew} addNewIngredient={addNewIngredient}/>
    </>;
}