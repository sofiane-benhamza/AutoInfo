import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const active = 'active';
    const fonted = { fontFamily: "'Anton', sans-serif", fontSize: "24px" };
    const bigger = { fontSize: "30px" }

    return (
        <nav className="navbar navbar-expand bg-black text-light border-bottom border-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to='/'>
                            <p className={active + ' nav-link text-light '} style={fonted}> BrowsE<span style={bigger} > <Icon.CarFrontFill /> V</span>ehicles
                            </p>
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to='saved-cars'>
                <p className="btn btn-primary float-right p-2 m-2 "><Icon.ConeStriped size='25' /> Saved</p>
            </Link>
        </nav >

    );
}
