import React, {useState} from 'react'
import Button from "@mui/material/Button"

function Game() {

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(100);
    const [help, setHelp] = useState([{id: 0, massage: ""}]);
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const itemStyle = {
        border: "1px solid",
        borderColor: "blue",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        width: "330px"

    }
    function proverka() {
        if (count === 9) {
            alert("You lose")
            setResult(number);
            setCount(10);
        } else {
            if (input == number) {
                alert("You Win")
                setHelp([
                    ...help,
                    {
                        id: help.length + 1,
                        message: `${input} == N`
                    }
                ])
                setResult(number);
            } else {
                setCount(count + 1);
                if (input > number) {
                    setHelp([
                        ...help,
                        {
                            id: help.length + 1,
                            message: `${input} > N`
                        }
                    ])
                } else {
                    setHelp([
                        ...help,
                        {
                            id: help.length + 1,
                            message: `${input} < N`
                        }
                    ])
                }
            }
        }
    }

    function random() {
        setResult('');
        setCount(0);
        setHelp([{id: 0, massage: ""}])
        setNumber(Math.floor(Math.random() * (1000 - 1 + 1)) + 1);

    }

    return (
        <div className={"bodyGame"}>
            <div>
                <Button variant = "contained" color="primary" onClick={random}>New game</Button>
                <input type={"text"} onChange={(event) => setInput(event.target.value)} disabled={count === 10 }/>
                <Button variant = "contained" color="primary" onClick={proverka} disabled={count === 10 }>Check</Button>
            </div>
            <div className={"numberList"} style={itemStyle}> {help.map(m => (
                <p key={m.id}>{m.message}</p>
            ))}</div>
            <h3>Attempts {count}</h3>
            <h3>Result: {result}</h3>
        </div>
    );
}

export default Game