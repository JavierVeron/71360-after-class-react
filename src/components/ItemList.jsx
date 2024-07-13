import Item from "./Item"

const ItemList = ({items}) => {
    return (
        <>
            {items.map(producto => (
                <Item key={producto.id} item={producto} />
            ))}
        </>
    )
}

export default ItemList