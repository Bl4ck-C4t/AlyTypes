import {Link} from "react-router-dom";
// ["Saviour", "Villain", "Anxious", "Confident", "Workaholic", "True", "Enigma", "Smart",
//     "Indulging", "Romantic"]

export default function Navbar() {
    return ( //
        <nav className="nav">
            <Link to="/" id="site-title"> Home </Link>
            <ul>
                <li>
                    <Link to="/anxious">
                        Anxious
                    </Link>
                </li>
                <li>
                    <Link to="/gamer">
                        Epic Gamer
                    </Link>
                </li>
                <li>
                    <Link to="/enigma">
                        Enigma
                    </Link>
                </li>
                <li>
                    <Link to="/cute">
                        Cute
                    </Link>
                </li>
            </ul>
        </nav>

    )
}