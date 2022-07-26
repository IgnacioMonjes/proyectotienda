import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    return(
        <nav className = "Navbar">
            <div>
                <CartWidget/>
                <h1> 
                Ecommerce
                </h1>
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