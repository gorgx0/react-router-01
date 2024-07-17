import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./Layout.tsx";

function Home() {
    return <>Home</>;
}

function About() {
    return <>About</>;
}

function Page404() {
    return <>Page Not Found</>;
}

function Ingredients() {
    return <>Ingredients</>;
}

function Recipes() {
    return <>Recipes</>;
}

function App() {

    const router = createBrowserRouter([
        {
            // parent route component
            element: <Layout/>,
            // child route components
            children: [
                {
                    path: "/",
                    element: <Home/>,
                }, {
                    path: "/ingredients",
                    element: <Ingredients/>,
                }, {
                    path: "/recipes",
                    element: <Recipes/>,
                }, {
                    path: "/about",
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
