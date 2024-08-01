import { Link } from "react-router-dom"

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row my-5">
                <div className="col text-center">
                    <div className="alert alert-light p-5" role="alert">
                        <h1>👮🏻</h1>
                        <h2>Error 404!</h2>
                        <h3>La página que estás buscando no existe!</h3>
                        <Link to={"/"} className="btn btn-dark rounded-pill mt-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error404