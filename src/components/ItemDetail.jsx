import ItemCount from "./ItemCount"

const ItemDetail = ({item}) => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <img src={item.image} alt={item.title} className="img-fluid" />
                </div>
                <div className="col-md-5">
                    <h1>{item.title}</h1>
                    <p><b>${item.price}</b></p>
                    <div className="alert alert-light" role="alert">Hasta 6 cuotas sin interés con todos los bancos</div>
                    <p>{item.description}</p>
                    <ItemCount stock={item.stock} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail