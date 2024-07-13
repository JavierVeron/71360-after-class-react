import { useEffect, useState } from "react"
import arrayProductos from "../assets/json/productos.json"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(arrayProductos.find(item => item.id === parseInt(id)))
            }, 2000)
        })

        promesa.then(response => {
            setItem(response)
        })
    }, [id])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer