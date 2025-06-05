import './Product.css'

const Product = (props) => {

    return <div className='card'>
        {props.data.imgLink && <img src={props.data.imgLink} alt={props.data.name} className='product-img' />}
        <h3>{props.data.name}</h3>
        <p>Category: {props.data.Category}</p>
        <p>Color: {props.data.Colour}</p>

        <div className="price-card">
            <div>
                <p>M.R.P. <span><del> - ₹{props.data.price + (props.data.price * 0.10)}</del></span></p>
                <h6><big className='text-danger'>-10%  </big> <sup>₹</sup>{props.data.price}</h6>
            </div>
            <button >Add to card</button>
       
        </div>
    </div>
}

export default Product;