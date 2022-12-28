import {useState} from "react";

function ProductForm(props){
    const [input, setInput] = useState('')

    function thisSubmit(e){
        e.preventDefault()
        props.addProducts(input)
        setInput("")
    }
    function thisChange(e){
        setInput(e.currentTarget.value)
    }
    function keySubmit(e){
        if(e.key === "Enter"){
            thisSubmit(e)
        }
    }
    return(
      <form onSubmit={thisSubmit}>
          <input
            value = {input}
            type = "text"
            onChange = {thisChange}
            onKeyDown = {keySubmit}
            placeholder = "Product Name"
          />
          <button>
              Add
          </button>
      </form>
    );
}
export default ProductForm;