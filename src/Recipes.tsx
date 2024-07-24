import {useContext} from "react";
import {DataContext, Recipe} from "./DataContext.tsx";

export default function Recipes() {

    const data = useContext(DataContext)

    function ingredientsList(recipe: Recipe) {
        return recipe.ingredients.map((ing)=>(<>{ing.ingredient.name} - {ing.amount} {ing.ingredient.unit}<br/></>))
    }

    const recipeNames = data.recipes.map((recipe)=>{
        return (<><h5><u>{recipe.name}</u></h5><br/>{ingredientsList(recipe)}<hr/></>)
    })

    return (<>
        {recipeNames}
    </>)
}