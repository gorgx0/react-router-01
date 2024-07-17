import {Link} from "react-router-dom";
import PathConstants from "./pathConstants.ts";

export default function Header() {
    return <header>
        <div className="header-div">
            <h1 className="title"><Link to={PathConstants.HOME}>My React App</Link></h1>
            <nav className="navbar">
                <ul className="nav-list">
                    <li className="nav-item" style={{float: "left"}}><Link to={PathConstants.HOME}>Home</Link></li>
                    <li className="nav-item" style={{float: "left"}}><Link to={PathConstants.INGREDIENTS}>Ingredients</Link></li>
                    <li className="nav-item" style={{float: "left"}}><Link to={PathConstants.RECIPES}>Recipes</Link></li>
                    <li className="nav-item" style={{float: "left"}}><Link to={PathConstants.ABOUT}>About</Link></li>
                </ul>
            </nav>
        </div>
    </header>
}