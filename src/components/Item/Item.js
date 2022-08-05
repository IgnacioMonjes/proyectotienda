import "./Item.css"

const Item = ({product}) => {
    return(
        <li>
            <h3>{product.name}</h3>
            <img src={product.img} alt={product.name} className="App-Images"/>
        </li>
    )
}

export default Item