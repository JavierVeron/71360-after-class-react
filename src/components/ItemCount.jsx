import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
            console.log("Agregaste " + contador + " productos al carrito!");
        }
    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock])

    return (
        <>
            {visible ? 
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-dark rounded-start-pill" onClick={decrementar}>-</button>
                            <button type="button" className="btn btn-dark">{contador}</button>
                            <button type="button" className="btn btn-dark rounded-end-pill" onClick={incrementar}>+</button>
                        </div>
                    </div>
                </div>
                <div className="row my-1">
                    <div className="col">
                        <button type="button" className="btn btn-dark rounded-pill" onClick={addToCart}>Agregar al Carrito</button>
                    </div>
                </div>
            </div> : <Link to={"/cart"} className="btn btn-dark rounded-pill">Terminar Mi Compra</Link> }
        </>
    )
}

export default ItemCount