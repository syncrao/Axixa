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
        { name: "Wi-Fi", img: "https://assets.airtel.in/static-assets/home-recast/images/wifi.gif" },
        { name: "Postpaid", img: "https://assets.airtel.in/static-assets/legos/svg/icons/dth-filled-icon.svg" },
        { name: "Prepaid", img: "https://assets.airtel.in/static-assets/legos/svg/icons/postpaid-filled-icon.svg" },
        { name: "DTH", img: "https://assets.airtel.in/static-assets/legos/svg/icons/prepaid-filled-icon.svg" },
        { name: "Airtel Black", img: "https://assets.airtel.in/static-assets/home-recast/images/wifi.gif" }
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

    const plans = [
        {
            type: "FIBER",
            title: "Enjoy unlimited wi-fi at ₹999",
            description: "Up to 200 Mbps speed, unlimited calls & OTT apps",
            img: "https://assets.airtel.in/static-assets/home-recast/images/recommendations-slide-1.png"
        },
        {
            type: "POSTPAID",
            title: "Get a superior network at just ₹549",
            description: "75 GB data with no daily limit & top OTT apps",
            img: "https://assets.airtel.in/static-assets/home-recast/images/recommendations-slide-2.png"
        },
        {
            type: "PREPAID",
            title: "Enjoy high-speed, seamless network",
            description: "Home delivery of SIM & Quick activation",
            img: "https://assets.airtel.in/static-assets/home-recast/images/recommendations-slide-3.png"
        }
    ];

    const plans2 = [
        {
            title: "Airtel Office Internet",
            description: "Power your business with broadband that comes with everything you need",
            img: "https://assets.airtel.in/static-assets/misc/img/b2b-airtel-office-internet.svg",
        },
        {
            title: "Airtel Corporate Postpaid",
            description: "Empower your Business with the superfast 4G Network",
            img: "https://assets.airtel.in/static-assets/misc/img/b2b-mobile.svg",
        },
        {
            title: "Airtel IQ",
            description: "World's first network-embedded CPaaS",
            img: "https://assets.airtel.in/static-assets/misc/img/b2b-airtel-iq.svg",
        },
        {
            title: "Dedicated Internet",
            description: "Strong and dedicated leased line connectivity for your company",
            img: "https://assets.airtel.in/static-assets/misc/img/b2b-airtel-dedicated-internet.svg"
        }
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
            {services.map(val => <div className="col dropdown dropdown-hover hover-border-top-red text-center text-dark p-1 ">
                <button className="btn dropdown-toggle m-0 p-0 fs-9 fw-semibold " data-bs-toggle="dropdown">{val}</button>
                <ul className="dropdown-menu">
                    {airtelOptions.map(val => <li className="dropdown-item">{val}</li>)}
                </ul>
            </div>)}
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

        <div className="bg-light">
            <div className="container ">
                <h1 className="m-4 fw-bold fs-1">Buy a new connection</h1>
                <div className="row gap-4">
                    {airtelServices.map(obj => <div className="col">
                        <img src={obj.img} height="50px"></img>
                        <h1 className="fs-6 m-3">{obj.name}</h1>
                    </div>)}
                </div>
                <div className=" border d-inline-flex align-items-center gap-4 p-2 px-4 m-4 rounded-3">
                    <img className="mb-2 " src="https://assets.airtel.in/static-assets/home-recast/images/switch-to-airtel-web.png" height="60px" ></img>
                    <div className="text-start mt-2">
                        <h2 className="fs-6 fw-bold ">Switch to airtel</h2>
                        <p className="fs-8">Select a plan & order SIM • Get SIM home-delivered</p>
                    </div>

                    <button className="btn btn-outline-dark fs-9 fw-semibold m-0 p-1 px-3  ">GET STARTED</button>
                </div>
            </div>
        </div>

        <div className="container ">
            <h1 className="m-3 fw-bold fs-1">Recharge or pay bills</h1>
            <div className="row p-4">
                {airtelServices.map((obj, index) => index !== 0 ? <div className="col d-flex  justify-content-center bg-body-secondary m-4 rounded-4 pt-1">
                    <img src={obj.img} height="25px" />
                    <h1 className="fs-7 p-1">{obj.name}</h1>
                </div> : null)}
            </div>
            <input className=" w-50 mb-5 mt-0" placeholder="Enter mobile number" />
            <button className="btn btn-dark w-50 ">RECHARGE</button>
        </div>

        <div className="d-flex justify-content-center align-items-center bg-warning-subtle p-1 mb-5">
            <img src="https://assets.airtel.in/static-assets/home-recast/images/offer-icon.png" height="40px" />
            <p className="pt-1  m-2 fw-bold fs-8">Free 2 GB data coupons on select recharges via Thanks app</p>
            <button className="btn btn-outline-dark rounded-5 fs-7 p-1">GET APP</button>
        </div>

        <div className="container-fluid text-center mt-4 mb-5 ">
            <h1>Recommended for you</h1>
            <div className="row mt-5 m-4 gap-4">
                {plans.map(obj => <div className="col border m-0 p-0 rounded-4">
                    <img className="rounded-top-4" width="100%" src={obj.img} />
                    <div className="text-start p-4">
                        <h6 className="fs-7 fw-bold bs-success">{obj.type}</h6>
                        <h1 className="fs-4">{obj.title}</h1>
                        <p className="fs-7">{obj.description}</p>
                        <button className="btn btn-dark p-2 fs-8 fw-semibold">BUY NOW</button> <span>LEARN MORE</span>
                    </div>
                </div>)}
            </div>
        </div>

        <div className="container-fluid text-center plan text-light">
            <h1 className="pt-5 " >Find the best Wi-Fi plan for you</h1>
            <div className="row m-5 gap-5">
                <div className="col bg-light d-flex flex-column  align-items-center text-dark p-5 rounded-5">
                    <p className="fw-semibold fs-8">STEP 1 OF 2</p>
                    <h3 className="fw-bold fs-6 pt-2 lh-base">How many devices are you looking to connect to your wi-fi?</h3>
                    <p className="fs-7">laptops, TVs, mobiles</p>
                    <div className="d-inline-flex flex-column">
                        <button className="btn btn-dark px-6 rounded-5"> 1-5 </button>
                        <button className="btn btn-outline-dark px-6 rounded-5">6-10</button>
                        <button className="btn btn-outline-dark px-6 rounded-5">10+</button>
                    </div>
                </div>
                <div className="col bg-light  d-flex flex-column  align-items-center text-dark p-5 rounded-5">
                    <p className="fw-semibold fs-8">STEP 2 OF 2</p>
                    <h3 className="fw-bold fs-6 pt-2 lh-base">What do you plan to use the connection for?</h3>
                    <p className="fs-7">select all that apply</p>
                    <div className="d-inline-flex flex-column">
                        <button className="btn btn-dark px-5 py-2 rounded-5">General Browsing</button>
                        <button className="btn btn-dark px-5 py-2 rounded-5">Gaming</button>
                        <button className="btn btn-outline-dark px-5 py-2 rounded-5">Netflix, Hotstar etc.</button>
                        <button className="btn btn-outline-dark px-5 py-2 rounded-5">Work from home</button>
                    </div>
                </div>
                <div className="col bg-light align-items-center text-dark p-5 rounded-5">
                    <img width="100px" src="https://assets.airtel.in/static-assets/home-recast/images/wifi.png" ></img>
                    <h4 className="fw-bold fs-5 mt-3">The best plan for you is</h4>
                    <h1 className="fw-bold fs-2 mt-3">100 Mbps</h1>
                    <p className="fs-7 fw-semibold">Rs. 799 per month</p>
                    <button className="btn btn-dark px-6  py-1 mt-4 ">Get Started</button>
                    <p className="mt-1 text-primary fw-semibold fs-7">VIEW OTHER PLANS</p>
                </div>
            </div>
        </div>

        <div className="container-fluid p-5 m-3">
            <h1 className="fs-2 fw-bold mb-4">For your business</h1>
            <p className="fs-6">Solutions for medium to large scale enterprises</p>
            <p className="text-primary fw-semibold">Explore airtel business &gt;</p>
            <div className="row gap-5 mt-4 m-1 ">
                {plans2.map(obj => <div className="col border p-3 rounded-4 bg-light">
                    <img width="40px" src={obj.img} />
                    <h1 className="fs-6 fw-bold mt-2">{obj.title}</h1>
                    <p className="fs-8">{obj.description}</p>
                </div>)}
            </div>
        </div>

        <div className="text-center mt-5 bg-light p-4" >
            <img width="90%"  className="rounded-4" src="https://assets.airtel.in/static-assets/home-recast/images/dot_sanchar_sathi_banner_dweb.jpg" />
        </div>

        
    </>
    );
}
export default Airtel;
