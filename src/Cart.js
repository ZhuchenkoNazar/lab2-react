import React, {useState} from "react";
import Button from "@mui/material/Button"
function Cart({props, setSumm, setCount}){

    const [count, setCountt] = useState(0);
    function Increment() {
            setCountt(count + 1);
            setSumm(prev => prev + props.price);
            setCount(prev => prev + 1);
    }

    function Decrement() {
        if (count > 0) {
            setCountt(count - 1);
            setSumm(prev => prev - props.price);
            setCount(prev => prev - 1);
        }
    }

    return(

        <div key = {props.id}>
            <table className = {"CartTable"}>
                <tr>
                    <td>
                        {props.name}
                    </td>
                    <td>
                        {props.price}
                    </td>
                    <td>
                        <Button variant = "contained" color="primary" onClick = {Increment}>
                           +
                        </Button>
                        {count}
                        <Button variant = "contained" color="primary" onClick = {Decrement}>
                            -
                        </Button>
                    </td>
                    <td>
                        {props.price*count}
                    </td>
                </tr>
            </table>
        </div>

    );
}
export default Cart;