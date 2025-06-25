import { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import Edit from "./Edit";
import ForKey from "./ForKey";

function App() {
  const [data, setData] = useState([])
  const [whatToShow, setWhattoshow] = useState({ show: "create", data: null })

  useEffect(() => {

    axios.get('https://raoapi.vercel.app/api/school/artist/').then((res) => { setData(res.data) })

  }, [])

  const handleDelete = (id) => {
    axios.delete(`https://raoapi.vercel.app/api/school/artist/${id}/`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (

    <ForKey/>
    // <div >
    //   {whatToShow.show == "create" ? <Create /> : <Edit data={whatToShow.data} />}

    //   <h1>Crud</h1>
    //   {whatToShow.show}


    //   <h2>Axixa</h2>
    //   {data.map((dataRecord, index) => <div>
    //     <p>{dataRecord.name}</p>
    //     <h1>{dataRecord.age}</h1>
    //     <button onClick={() => setWhattoshow({ show: "edit", data: dataRecord })}>Edit</button>
    //     <button onClick={() => handleDelete(dataRecord.id)}>Delete</button>
    //   </div>)}
    // </div>
  );
}

export default App;
