import { useCart } from "../context/CartContext";
import { useState } from "react";
import FormUser from "../components/FormUser/FormUser";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const Cart = () => {

    const [ orderId, setOrderId] = useState(null);

    const [userForm, setUserForm ] = useState({
        name: '',
        lastname: '',
        email: '',
        phone: ''
    })

    const {
        cartItems,
        addItem,
        deleteItem,
        removeItem,
        cleanCart,
        totalPrice
    } = useCart();
    
    const handleOnChange = (e) => {
        const {name, value } = e.target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }

    const handleSubmitOrder = () => {
        
        console.log("Crear pedido")
        const date = new Date();
        const newOrder = {
            products: cartItems,
            totalPrice,
            date: date.toLocaleString(),
            state: 'generada',
            email: userForm.email
        };

        const db = getFirestore();
        const addProductCollection = collection(db, "orders");

        addDoc(addProductCollection, newOrder)
            .then(({ id }) => setOrderId(id))
            .catch((error) => console.error(error));
        
        cleanCart()
    };

    return(
        <div >
            {cartItems?.length == 0
                ? <p>Su carrito esta vacio</p>
                : <>
                    {
                        cartItems.map(item => (
                                <div key={item.id} style={{
                                    border: '1px solid',
                                    width: '250px',
                                    padding: '5px'
                                    }}>
                                    <span>{item.title}</span>
                                    <span>{item.price}</span>
                                    <img 
                                        src={item.image} 
                                        alt={item.title}
                                        style={{
                                            width: '50%'
                                        }}  />

                                    <div>
                                        <button onClick={() => addItem(item)} style={{
                                    margin: '3px'
                                    }}>+</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => removeItem(item.id)}style={{
                                    margin: '3px'
                                    }} >-</button>
                                    </div>
                                    <div><button onClick={() => deleteItem(item.id)}>Eliminar</button></div>
                                </div>
                        ))
                    }
                    <div>Total: {totalPrice}</div>
                    <button onClick={cleanCart} style={{
                                    margin: '5px'
                                    }}>Vaciar carrito</button>
                    <div>
                        <FormUser values = {userForm} handleOnChange = {handleOnChange} handleSubmitOrder = {handleSubmitOrder}/>
                        {
                            orderId && <p>¡Felicidades su pedido con el código {orderId} se realizo con exito!</p>
                        }

                        
                    </div>
                </>
            }
        </div>
    )
}

export default Cart;