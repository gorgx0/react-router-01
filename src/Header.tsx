import {Link} from "react-router-dom";
import PathConstants from "./pathConstants.ts";
import {Stack} from "react-bootstrap";

export default function Header() {
    return <Stack direction="horizontal" gap={4} className="justify-content-around">
        <Link to={PathConstants.HOME}>Home</Link>
        <Link to={PathConstants.INGREDIENTS}>Ingredients</Link>
        <Link to={PathConstants.RECIPES}>Recipes</Link>
        <Link to={PathConstants.ABOUT}>About</Link>
    </Stack>
}