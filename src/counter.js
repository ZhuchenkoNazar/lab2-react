import React, {useState} from 'react'
import Button from "@mui/material/Button"
function Numbers(props) {
    const [count, setCount] = useState(props.number.initial);

    function Increment() {
        if (count < props.number.max) {
            setCount(count + 1);
        }

    }

    function Decrement() {
        if (count > props.number.min) {
            setCount(count - 1);
        }
    }

    function Reset() {
        setCount(props.number.initial)
    }

    return (
        <div>
            <p>Поточний рахунок {count}</p>
            <Button variant = "contained" color="primary" onClick = {Increment}>
                +
            </Button>
            <Button variant = "contained" color="primary" onClick = {Decrement}>
                -
            </Button>
            <Button variant = "contained" color="primary" onClick = {Reset}>
                Reset
            </Button>
        </div>
    );
}

Numbers.defaultProps = {number: {min: -10, initial: 10, max: 50}}
export default Numbers;