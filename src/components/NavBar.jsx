import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <img src="images/logo-nike.svg" alt="Nike Argentina" width={60} />
                </div>
                <div className="col">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Fútbol</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Hombre</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Mujer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-black" href="#">Niño/a</a>
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