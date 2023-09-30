import { Button } from "react-bootstrap"
import "./CartWidget.css"
import { useCart } from "../../context/CartContext"
import { useNavigate } from "react-router-dom";



const CartWidget = () => {

    const navigate = useNavigate();
    const goTo = () => navigate("/cart");

    const {totalItems} = useCart()

    return (
        <div onClick = {goTo}>
            <img className="Carrito" width="64" height="64" src="https://img.icons8.com/dusk/64/shopping-cart-loaded--v1.png" alt="shopping-cart-loaded--v1"/>
            <strong>{totalItems}</strong>
        </div>
    )
}
export default CartWidget