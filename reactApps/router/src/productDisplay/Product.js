import './Product.css'

const Product = (props) => {

    return <div className='card'>
        {props.data.imgLink && <img src={props.data.imgLink} alt={props.data.name} className='product-img'/>}
        <h3>{props.data.name}</h3>
        <p>Price: ₹{props.data.price}</p>
        <p>Category: {props.data.Category}</p>
        <p>Color: {props.data.Colour}</p>
    </div>
}

export default Product;