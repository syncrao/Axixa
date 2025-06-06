import axios from 'axios';
import { useState } from 'react';
const data = { name: "axixa", age: "10" }


const Create = () => {
    const [name, setName] = useState(" djd")
    const [age, setAge] = useState("10")
    console.log("name:" ,name, "Age:", age)

    const createPost = () => {
        axios.post('https://raoapi.vercel.app/api/school/artist/', { name, age })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (<>
        {name}
        <input placeholder="name" type="text" name="name" onChange={(elemant) => setName(elemant.target.value)} />
        {age}
        <input placeholder="age" type="number" name="age" onChange={(elemant) => setAge(elemant.target.value)} />
        <button onClick={createPost} >Create</button>
    </>
    )
}

export default Create