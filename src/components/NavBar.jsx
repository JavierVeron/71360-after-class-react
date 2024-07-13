import { Link, NavLink } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <Link to={"/"}>
                        <img src={"/images/logo-nike.svg"} alt="Nike Argentina" width={60} />
                    </Link>
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink to={"/category/futbol"} className="nav-link text-black">Fútbol</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/hombre"} className="nav-link text-black">Hombre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/mujer"} className="nav-link text-black">Mujer</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/category/nino-a"} className="nav-link text-black">Niño/a</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="col text-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar