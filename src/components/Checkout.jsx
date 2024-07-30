import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
    const {cart, totalProducts, sumProducts} = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false;
        }

        if (email == "") {
            return false;
        }

        if (telefono == "") {
            return false;
        }

        const order = {
            buyer:{name:nombre, phone:telefono, email:email},
            items:cart.map(item => ({id:item.id, title:item.title, price:item.price})),
            total:sumProducts()
        }

        // Agregar un nuevo Documento a FireStore
        /* const db = getFirestore();
        const orderCollection = collection(db, "orders");
        addDoc(orderCollection, order).then(response => {
            console.log(response);
            setOrderId(response.id);
        }) */

        // Modificar un Documento en FireStore
        /* const db = getFirestore();
        const docRef = doc(db, "orders", "Hhd1YEqVCEjDnNgQHlcW");
        const fechaActual = new Date();
        const fechaDeHoy = `${fechaActual.getDate()}-${(fechaActual.getMonth()+1)}-${fechaActual.getFullYear()}`;
        const bebidas = [
            {id:1, nombre:"Coca Cola", precio:2000},
            {id:2, nombre:"Seven Up", precio:2500},
        ]
        updateDoc(docRef, {total:100000, fecha:fechaDeHoy, bebidas:bebidas}).then(() => {
            console.log("Tu Documento fue actualizado!");
        }) */

        // Modificar varios Documentos en Batch
        const db = getFirestore();
        const doc1 = doc(db, "orders", "Hhd1YEqVCEjDnNgQHlcW");
        const doc2 = doc(db, "orders", "EJuPFqyS359omOvnqKVk");
        const batch = writeBatch(db);
        batch.update(doc1, {total:5000, fecha:"30-07-2024"}); // Actualizar los valores del campo total y fecha
        batch.set(doc2, {total:615000}); // Eliminar todos los campos y agregar el campo total (es destructivo)
        batch.commit();
        console.log("Modificación en Batch finalizada!");
    }

    if (totalProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <p><img src="/images/bag.svg" alt="Carrito" width={80} /></p>
                        <h1>Tu carrito está vacío</h1>
                        <h4>Te ayudamos a escontrar lo que buscas</h4>
                        <Link to={"/"} className="btn btn-dark rounded-pill mt-5">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-light" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>

                <div className="col">
                    <table className="table">
                        <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="align-middle"><img src={item.image} alt={item.title} width={72} /></td>
                                <td className="align-middle">{item.title}</td>
                                <td className="align-middle text-center">${item.price} X {item.quantity}</td>
                                <td className="align-middle text-center">${item.price * item.quantity}</td>
                            </tr>
                        ))}
                        <tr>
                            <td className="align-middle text-center" colSpan={3}>Total a Pagar</td>
                            <td className="align-middle text-center">${sumProducts()}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-light p-5" role="alert">
                        <h3>Gracias por tu compra!</h3>
                        <p>Tu Número de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout