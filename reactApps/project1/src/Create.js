import axios from 'axios';
import { useState, useRef } from 'react';
const data = { name: "axixa", age: "10" }


const Create = () => {
    const name = useRef()
    const age = useRef()
  

    const createPost = () => {
        axios.post('https://raoapi.vercel.app/api/school/artist/', { name:name.current.value, age:age.current.value })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const checkRef = () => {
        console.log("useRef check ", name.current.value)
    }

    return (<>
        <input placeholder="name" type="text" name="name"  ref={name} />
        <input placeholder="age" type="number" name="age" ref={age} />
        <button onClick={createPost} >Create</button>
        <button onClick={checkRef} >Check</button>
        

    </>
    )
}

export default Create