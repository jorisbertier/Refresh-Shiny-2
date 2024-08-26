import { Link } from "react-router-dom";

function Header() {
    return (
        <nav>
            <Link to="/">Acceuil</Link>
            <Link to="/survey/1">Questionnaire</Link>
            <Link to="/freelances">Freelance</Link>
            <Link to="/results">Results</Link>
        </nav>
    )
}

export default Header