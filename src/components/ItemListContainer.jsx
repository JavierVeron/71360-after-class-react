const ItemListContainer = ({texto}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="alert alert-light" role="alert">
                        <h1 className="text-center" style={{color:"black",padding:"20px",textTransform:"uppercase"}}>{texto}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer