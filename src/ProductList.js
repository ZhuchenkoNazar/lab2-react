function ProductList(prop){
    const itemStyle = {
        border: "1px solid",
        borderColor: "blue",
        backgroundColor: "DodgerBlue",
        padding: "5px",
        width: "330px"

    }
    return(
        <div key = {prop.prod.id} className = "list-prod" style={itemStyle}>
            <li>
            <div style={{color: "white", float: "left"}}>
                <strong>{prop.prod.prod}</strong>
            </div>
                <button className = "delete-prod" onClick = {() => prop.deleteProducts(prop.prod.id)} style={{color: "red", float: "right", textAlign: "right"}}>
                    delete
                </button>
            </li>
        </div>
    );
}
export default ProductList;