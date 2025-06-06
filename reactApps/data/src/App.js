import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const [data, setdata] = useState({ username: 'new', password: '123' })
  const [error, setError] = useState(null)
  const value = useSelector((state) => state.task)
  const dispatch = useDispatch()
  console.log("error",error)


  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value })
  }

  const handleLogin = () => {
    fetch(`https://raoapi.vercel.app/api/school/login/`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).then(
      data => {
        if (data.message == "Login successful") {
          setError(null)
          dispatch({ type: "LOGIN", data })
        }
        else {
          setError(data)
          console.log(error)
        }
      }
    );
  }

  return (
    <div>
      <h1>Name:{value.username}  </h1>
      <p>id:{value.id}</p>
      {error?<h1>{error.error}</h1>:""}
      <input name="username" placeholder="username" type="text" value={data.username} onChange={handleChange} ></input>
      <input name="password" placeholder="password" type="text" value={data.password} onChange={handleChange}></input>
      <button onClick={handleLogin} >Login</button>
    </div>
  );
}

export default App;
