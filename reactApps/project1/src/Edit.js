import axios from "axios"
import { useRef, useState } from "react"


const Edit = (kuch) => {
    const name = useRef()
    const age = useRef()
    const [data, setData] = useState(kuch.data)


    const handleEdit = () => {
        axios.put(`https://raoapi.vercel.app/api/school/artist/${kuch.data.id}/`,{ name:name.current.value, age:age.current.value })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return <>
        <input placeholder="name" type="text" name="name"  Value={data.name} ref={name} />
        <input placeholder="age" type="number" name="age" ref={age} defaultValue={data.age}/>
         <button onClick={handleEdit} >Edit</button> 
    </>

}

export default Edit