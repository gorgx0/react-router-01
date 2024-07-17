import {Link} from "react-router-dom";
import PathConstants from "./pathConstants.ts";

export default function Header() {
    return <header>
        <div className="header-div">
            <h1 className="title"><Link to={PathConstants.HOME}>My React App</Link></h1>
            <span style={{margin: "2px"}}><Link to={PathConstants.HOME}>Home</Link></span>
            <span style={{margin: "2px"}}><Link to={PathConstants.INGREDIENTS}>Ingredients</Link></span>
            <span style={{margin: "2px"}}><Link to={PathConstants.RECIPES}>Recipes</Link></span>
            <span style={{margin: "2px"}}><Link to={PathConstants.ABOUT}>About</Link></span>
        </div>
    </header>
}