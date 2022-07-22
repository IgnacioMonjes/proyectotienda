import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className = "Navbar">
            <div>
                <h1>Ecommerce</h1>
                <CartWidget/>
            </div>
            <div>
                <button className = "NavbarButton">Celulares</button>
                <button className = "NavbarButton">Tablets</button>
                <button className = "NavbarButton">Notebooks</button>
            </div>
        </nav>
    )   
}

export default Navbar