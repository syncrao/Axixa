import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    
    axios.get('https://raoapi.vercel.app/api/school/users/').then((res) => { setData(res.data)})

  },[])


  return (
    <div >
      <h1>Crud</h1>
      <Create/>
      <h2>Axixa</h2>
      {data.map((dataRecord, index) =>  <div><p>{dataRecord.name}</p> <h1>{dataRecord.email}</h1> </div>)}
    </div>
  );
}

export default App;
