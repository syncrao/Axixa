import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { add } from "./redux/action.js";
import store from "./simpleRedux/part_002/store.js";
import { contactUpdate } from "./simpleRedux/part_002/action.js";

function App() {
  const data2 = useRef({})
  const {contact, user} = useSelector((state) => state)
  const count = 10
  
 
  const [data, setData] = useState(null)
  const dp = useDispatch()

  console.log("value",data2.current.username.value)
  const addContact = () => {
    setData( data2.current.username.value)
    console.log("updated")
  }


  return (
    <div >
    hello {count}
    <button onClick={() => {
      dp(add(10))
    }}>click</button>

    <div>
     
      <input name="name" placeholder="name" ref={(el) => (data2.current.username = el)}  value={data.current.username}/>
      <button onClick={addContact} >add</button>
    </div>
    </div>

  );
}

export default App;
