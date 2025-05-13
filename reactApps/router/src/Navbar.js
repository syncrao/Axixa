import { Link } from "react-router-dom";
import './Navbar.css'
import { useState } from "react";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav>
            <div className="logo">Shah Rukh Rao</div>
            <div className="hamburger" onClick={() => setToggle(!toggle)} >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`nav-links ${toggle? "active": ""}`}>
                <Link to={"/"}>Home</Link>
                <Link to={"/airtel"}>Airtel</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/login"}>Login</Link>
            </div>
        </nav>
    );
}


export default Navbar;