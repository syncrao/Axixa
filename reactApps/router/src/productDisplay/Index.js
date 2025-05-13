import './Index.css'
import Product from './Product.js'
import data from './db.js'
import { useState } from 'react'


const Products = () => {
    const [category, setCategory] = useState("All")
    const categories = [...new Set(data.map(obj => obj.Category))];
    return (
        <div className='main'>
            <div className="category">
                <h3>Categories</h3>
                <div onClick={() => setCategory("All")} className={category === "All" ? 'active' : ''}>
                    All
                </div>
                {categories.map((cat, index) => (
                    <div
                        key={index}
                        onClick={() => setCategory(cat)}
                        className={category === cat ? 'active' : ''}
                    >
                        {cat}
                    </div>
                ))}
            </div>
            <div className='products'>
                {data.filter(obj => category === "All" || obj.Category === category).map(obj => <Product data={obj} />)}
            </div>
        </div>
    )
}

export default Products;
