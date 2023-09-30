
const FormUser = ({values, handleOnChange, handleSubmitOrder}) => {

    const { name, lastname, email, phone } = values; 
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    name = "name"
                    placeholder="Nombres"
                    value={name}
                    onChange={handleOnChange}/>
                <input 
                    type="text" 
                    name = "lastname"
                    placeholder="Apellidos"
                    value={lastname}
                    onChange={handleOnChange}/>
                <input 
                    type="email" 
                    name = "email"
                    placeholder="Correo Electronico"
                    value={email}
                    onChange={handleOnChange}/>
                <input 
                    type="number" 
                    name = "phone"
                    placeholder="Teléfono"
                    value={phone}
                    onChange={handleOnChange}/>
            </form>
            <button onClick={ handleSubmitOrder }style={{
                margin: '5px'
            }}>Realizar Pedido</button>
        
        </div>
    )
}

export default FormUser
