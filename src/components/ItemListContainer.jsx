import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemList from "./ItemList";
import { Link, useParams } from "react-router-dom";
//import Banner from "./Banner";
import { collection, doc, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore";


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.category == id) : arrayProductos)
            }, 2000)
        })

        promesa.then(response => {
            setItems(response)
        })
    }, [id]) */

    // Accediendo a un Documento de FireStore
    /* useEffect(() => {
        const db = getFirestore();
        const docRef = doc(db, "items", "utWFnttY3c8hvM4YY6Uy2");
        getDoc(docRef).then(snapShot => {
            if (snapShot.exists()) {
                setItems({id:snapShot.id, ...snapShot.data()});
            } else {
                console.error("Error! No existe el documento!");
            }
        })
    }, []) */

    // Acceder a una Colección (todos los Documentos)
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
            } else {
                console.error("Error! No existe la Colección 'items'!");
            }
        })
    }, []) */

    // Acceder a una Colección realizando Consultas
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        //const q = query(itemsCollection, where("precio", ">=", 3000)); // Mayor o igual que
        //const q = query(itemsCollection, where("categoria", "==", "colas")); // Igual a colas
        //const q = query(itemsCollection, where("categoria", "!=", "colas")); // Distinto de colas
        const q = query(itemsCollection, where("categoria", "==", "colas"), limit(1)); // Igual a colas y limitado a 1
        getDocs(q).then(snapShot => {
            if (snapShot.size > 0) {
                setItems(snapShot.docs.map(documento => ({id:documento.id, ...documento.data()})));
            } else {
                console.error("Error! No existe la Colección 'items'!");
            }
        })
    }, [])


    return (
        <>
            {/* {id ? "" : <Banner />} */}
            <div className="container">
                <div className="row">
                    {/* <ItemList items={items} /> */}
                    {items.map(item => (
                        <div key={item.id} className="col-md-4 mb-3">
                            <div className="card border-0">
                                <Link to={"/item/" + item.id}>
                                    <img src={item.imagen} className="card-img-top" alt={item.nombre} />
                                </Link>
                                <div className="card-body">
                                    <p className="card-text"><b>{item.nombre}</b></p>
                                    <p className="card-text"><b>$ {item.precio}</b></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ItemListContainer