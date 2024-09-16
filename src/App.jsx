import { getDatabase,set,ref } from "firebase/database";
import { app } from "./firebase/firebase";

const database=getDatabase(app)
function App() {
  const putData=()=>{
    set(ref(database,"users"),{
      name:"Roshni",
      age:20
    })
  }
  return (
    <>
      <button onClick={putData}>create data</button>
    </>
  )
}

export default App
