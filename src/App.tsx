import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import Ingredients from "./Ingredients.tsx";
import Recipes from "./Recipes.tsx";
import About from "./About.tsx";
import Page404 from "./Page404.tsx";
import pathConstants from "./pathConstants.ts";
import {DataContext, Ingredient} from "./DataContext.tsx";

function App() {


    const router = createBrowserRouter([
        {
            // parent route component
            element: <Layout/>,
            // child route components
            children: [
                {
                    path: pathConstants.HOME,
                    element: <Home/>,
                }, {
                    path: pathConstants.INGREDIENTS,
                    element: <Ingredients/>,
                }, {
                    path: pathConstants.RECIPES,
                    element: <Recipes/>,
                }, {
                    path: pathConstants.ABOUT,
                    element: <About/>,
                },
            ],
            "errorElement": <Page404/>
        },
    ]);

    const ingredients: Ingredient[] = [
        {"name": "Pepper", "unit": "g"},
        {"name": "Salt", "unit": "g"},
        {"name": "Milk", "unit": "ml"},
        {"name": "Egg", "unit": "piece"},
        {"name": "Olive Oil", "unit": "ml"},
        {"name": "Garlic", "unit": "clove"}
    ]

    return (
        <>
            <DataContext.Provider value={{ingredients: ingredients}}>
                <RouterProvider router={router}/>
            </DataContext.Provider>
        </>
    )
}

export default App
