import { createContext, useContext } from 'react'
const Legacy = createContext();

const Baap = () => {
    return (<>
        <div>Baap</div>
        <Beta/>
        </>
    )
};

const Beta = () => {
    const val = useContext(Legacy)
    return (
        <div>Beta {val}</div>
    )
};

function Login() {

    return (
        <Legacy.Provider value={12}>
        <div >
            dada
        </div> 
        <Baap/>
        </Legacy.Provider>
    )
}

export default Login;