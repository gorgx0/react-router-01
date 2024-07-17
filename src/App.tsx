import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./Home.tsx";
import Ingredients from "./Ingredients.tsx";
import Recipes from "./Recipes.tsx";
import About from "./About.tsx";
import Page404 from "./Page404.tsx";
import pathConstants from "./pathConstants.ts";

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

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
