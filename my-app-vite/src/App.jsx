import { useState } from 'react';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import ButtonComponent from './components/ButtonComponent/ButtonComponent';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
//import ItemListContainer from './components/ItemListContainer';


const App = () => {
  
  const [count, setCount] = useState (0);

  const incrementar = () => {
    setCount(count + 1)
    }
    
    const decrementar= () => {
    setCount(count - 1)
    }

  return (
    
  <div>

      <NavBarComponent />
      <ButtonComponent />

    <div>
      <h1>Contador</h1>
      <h2>{count}</h2>
      <ButtonComponent label="Incrementar" bsButtonType="primary" onClicFunction={incrementar} />
      <ButtonComponent label="Incrementar" bsButtonType="secondary" onClicFunction={decrementar} />

    </div>
  </div>
  )
}



export default App
