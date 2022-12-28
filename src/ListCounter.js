import React, {useState} from 'react'
import Button from "@mui/material/Button"
function Counter(props) {
    const [count, setCount] = useState(props.initials);

    function Increments() {
        if (count < props.maxx) {
            setCount(count + 1);
        }

    }

    function Decrements() {
        if (count > props.minn) {
            setCount(count - 1);
        }
    }

    function Resets() {
        setCount(props.initials)
    }

    return (
        <div>
            <p>Поточний рахунок {count}</p>
            <Button variant = "contained" color="primary" onClick={Increments}>
                +
            </Button>
            <Button variant = "contained" color="primary" onClick={Decrements}>
                -
            </Button>
            <Button variant = "contained" color="primary" onClick={Resets}>
                Reset
            </Button>

        </div>
    );
}


export default Counter;
