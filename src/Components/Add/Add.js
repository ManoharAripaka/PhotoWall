import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add } from "../../store/Store"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./add.css"
const Add = () => {
    const [enable, setEnable] = useState(false)
    const data = useSelector((state)=>state.post)
    const id = data.length + 1
    const dispatch = useDispatch()
    toast.configure()
    const addHandle = () => {
        setEnable(true)
    }
    const handleAddPost = () => {
        let caption = document.getElementById("text").value
        const url = document.getElementById("text1").value
        if (url !== ""){
            (caption === "") ? caption = <i>No Caption</i> : document.getElementById("text").value = ""
            document.getElementById("text1").value = ""
            dispatch(add({id,url,caption}))
            toast.success("Post Added",{position: toast.POSITION.BOTTOM_CENTER})
        }
    }
    return (
        <>
            <div className="add" onClick={addHandle}>
                <div className="one"></div>
                <div className="two"></div>
            </div>
            {enable ? 
                <div className="addWindow">
                    <p id="close" onClick={()=>setEnable(false)}>X</p>
                    <h3>Caption:</h3>
                    <input type="text" id="text" placeholder="Enter Caption"></input>
                    <h3>URL:</h3>
                    <input type="text" id="text1" placeholder="Enter URL"></input>
                    <br></br><button id="button" onClick={handleAddPost}>Submit</button>
                </div>
            : null
            }
        </>
    )
}
export default Add