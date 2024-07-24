import {useContext} from "react";
import {DataContext, Recipe} from "./DataContext.tsx";
import {Accordion} from "react-bootstrap";

export default function Recipes() {

    const data = useContext(DataContext)

    function ingredientsList(recipe: Recipe) {
        return recipe.ingredients.map((ing)=>(<>{ing.ingredient.name} - {ing.amount} {ing.ingredient.unit}<br/></>))
    }

    return (<>
        <Accordion alwaysOpen>
            {data.recipes.map((recipe)=>(
                <Accordion.Item eventKey={recipe.name}>
                    <Accordion.Header>{recipe.name}</Accordion.Header>
                    <Accordion.Body>
                        {ingredientsList(recipe)}
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    </>)
}