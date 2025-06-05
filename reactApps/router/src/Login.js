import { useRef, useState } from 'react'

function Login() {
    const [data2, setData] = useState(10)
    const data = useRef(10)

   
 

    return (
   
        <div >
            {data.current}
            <button onClick={() => data.current = data.current + data2 }>update</button>
            <button onClick={() => setData((prev) => prev + 1)} >Update State</button>
            {data2}
        </div> 
   
    )
}

export default Login;