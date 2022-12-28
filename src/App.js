import './App.css';
import Numbers from "./counter";
import Counter from "./ListCounter";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import Cart from "./Cart";
import {useState} from "react";
import Game from "./Game";
function App() {
    const number = {initial: 0, min: -10, max: 10}
    const counters = [
        {id: 1, initials: 6, min: -10, max: 20},
        {id: 2, initials: 7, min: -20, max: 10},
        {id: 3, initials: 8, min: -5, max: 30}
    ]
    const item = [
        {
            id: 1,
            name: "Lego",
            price: 300,
            min: 0
        },
        {
            id: 2,
            name: "Train",
            price: 200,
            min: 0
        },
        {
            id: 3,
            name: "Track",
            price: 150,
            min: 0
        }
    ];
    const [summ, setSumm] = useState(0);
    const [count, setCount] = useState(0);
    const [prodlist, setProd] = useState([])
    function addProducts(input){
        if(input){
            const newProd = {
                id: Math.random(),
                prod: input
            }
            setProd([...prodlist, newProd])
        }
    }

    function deleteProducts(id){
        setProd([...prodlist.filter((prod) => prod.id !== id)])
    }
  return (
    <div>
      <p>
        Task 1.1
      </p>
      <div>
        <Numbers number = {number}/>
      </div>
        <p>
            Task 1.2
        </p>
        <div>
            <Counter initials = {counters[0].initials} minn = {counters[0].min} maxx = {counters[0].max}></Counter>
            <Counter initials = {counters[1].initials} minn = {counters[1].min} maxx = {counters[1].max}></Counter>
            <Counter initials = {counters[2].initials} minn = {counters[2].min} maxx = {counters[2].max}></Counter>
        </div>
        <p>
            Task 2
        </p>
        <div>
            <ProductForm addProducts = {addProducts}/>
            {prodlist.map((prod) => {
                return(
                    <ProductList
                        prod = {prod}
                        key = {prod.id}
                        deleteProducts = {deleteProducts}
                    />
                );
            })
            }
        </div>
        <p>Task 3</p>
        <div>
            {item.map((props)=>
                <div key={props.id}>
                    <Cart setSumm = {setSumm} setCount = {setCount} props = {props}/>
                </div>)}

                        <p>Total count {count}</p>
                        <p>Total price {summ}</p>
        </div>
        <p>Task 4</p>
        <div>
            <Game/>
        </div>
    </div>
  );
}
export default App;
