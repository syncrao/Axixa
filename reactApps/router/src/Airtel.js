import { CiGrid41 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Airtel = () => {
    const services = [
        "Wi-Fi",
        "Postpaid",
        "Prepaid",
        "DTH",
        "Airtel Black",
        "Bank",
        "Airtel Finance",
        "Account"
      ];

      const airtelServices = [
        {name:"Wi-Fi", img:"https://assets.airtel.in/static-assets/home-recast/images/wifi.gif"},
        {name:"Postpaid", img:"https://assets.airtel.in/static-assets/legos/svg/icons/dth-filled-icon.svg"},
        {name:"Prepaid", img:"https://assets.airtel.in/static-assets/legos/svg/icons/postpaid-filled-icon.svg"},
        {name:"DTH", img:"https://assets.airtel.in/static-assets/legos/svg/icons/prepaid-filled-icon.svg"},
        {name:"Airtel Black", img:"https://assets.airtel.in/static-assets/home-recast/images/wifi.gif"}
      ];

      const airtelOptions = [
        "Pay Bill",
        "Buy New Connection",
        "View Plans",
        "International Roaming",
        "Switch Prepaid to Postpaid",
        "Port to Airtel",
        "Free Sim Delivery"
      ];
      
    return (<>
        <div className="row m-0 p-1 px-5 ">
            <a href="#" className="col-1 hover-border-top-red text-center text-decoration-none fw-semibold fs-7 text-dark mx-1 p-1">INDIVIDUAL</a>
            <Link to="#" className="col-1 hover-border-top-red text-center text-decoration-none fw-semibold fs-7 text-dark mx-1 p-1">BUSINESS</Link>
            <a href="#" className="col-1 hover-border-top-red text-center text-decoration-none fw-semibold fs-7 text-dark mx-1 p-1">INVESTOR</a>
            <div className="col"></div>
            <div className=" col-1 dropdown dropdown-hover hover-border-top-red text-center text-dark fw-semibold fs-9 p-1 me-5">
                <button className="btn dropdown-toggle  d-flex align-items-center  m-0 " data-bs-toggle="dropdown" >
                    <CiGrid41 size={16} />
                    <span>Explore Airtel</span>
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Thanks App</a></li>
                    <li><a className="dropdown-item" href="#">Airtel Payments Bank</a></li>
                    <li><a className="dropdown-item" href="#">XStream</a></li>
                    <li><a className="dropdown-item" href="#">Wynk</a></li>
                </ul>
            </div>
        </div>

        <div className="row m-0 pe-6 py-3 px-5 border">
            <div className="col-1">Logo</div>
            <div className="col-3"></div>
            {
               services.map(val => <div className="col dropdown dropdown-hover hover-border-top-red text-center text-dark p-1 ">
                <button className="btn dropdown-toggle m-0 p-0 fs-9 fw-semibold " data-bs-toggle="dropdown">{val}</button>
                <ul className="dropdown-menu">
                    {airtelOptions.map(val=> <li className="dropdown-item">{val}</li>)}
                </ul>
            </div>)
            }
        </div>
       
       <div className="row">
        <div className="col-6 ">
            <div className="container text-start " >
            <h1 className="m-8 fw-bold fs-3 ">Airtel Referral program is here !</h1>
            <p className="m-9 fw-medium ">Get up to ₹300 every time you refer any Airtel services to your friends</p>
            <button className="m-9 fs-8 px-4 bg-dark">REFFER NOW</button>
            </div>
        </div>
        <img className="col-6" src="https://assets.airtel.in/static-assets/home-recast/images/hero-banner-4.png"></img>
       </div>
      
       <div className="container ">
        <h1>Buy a new connection</h1>
        <div className="row">
            {
                airtelServices.map(obj => <div className="col">
                    <img src={obj.img} height="50px"></img>
                    <h1 className="fs-6 m-3">{obj.name}</h1>
                </div> )
            } 
        </div>
       </div>
    </>
    );
}
export default Airtel;
