import Title from "./Components/Title/Title"
import Add from "./Components/Add/Add"
import Data from "./Components/Data/Data"
import "./App.css"
import { BrowserRouter } from "react-router-dom"
const App = () => {
  return (
      <div className="App">
        <Title/>
        <Add/>
        <Data/>
      </div> 
  )
}
export default App