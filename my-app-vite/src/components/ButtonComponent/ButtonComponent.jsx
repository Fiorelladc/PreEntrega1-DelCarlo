import { Button } from "react-bootstrap";

function ButtonComponent({label, bsButtonType, onClicFunction}) {

    return <Button variant={bsButtonType} onClick ={onClicFunction} >{label}</Button>;
};

export default ButtonComponent;