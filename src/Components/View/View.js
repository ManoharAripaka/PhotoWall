import "./view.css"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { comment } from "../../store/Store"
const View = (props) => {
    toast.configure()
    const data = useSelector((state)=>state.post.data)
    const val = props.val
    const dispatch = useDispatch()
    const handleCommentAdd = (e) => {
        e.preventDefault()
        let com = document.getElementById("text").value
        let name = document.getElementById("guest").value
        if (com !== ""){
            document.getElementById("text").value = ""
            name === "" ? name = "guest" : document.getElementById("guest").value = ""
            dispatch(comment({name,com,val}))
            props.setCount(props.ount+1)
        }
        else{toast.info("No comment entered",{position: toast.POSITION.BOTTOM_CENTER})}
    }
    return(
        <>
            {props.enable ? 
                <div className="view" id="view">
                    <p onClick={()=>props.setEnable(false)} id="close">X</p>
                    <img id="image" src={props.prop.image} alt="#"/>
                    <h3>Caption:</h3>
                    <h4>{props.cap}</h4>
                    <div className="display">
                        {data[props.prop.valu].comments.map((value)=><div className="box"><h4>{value.name}:</h4><h5>{value.com}</h5></div>)}
                    </div>
                    <h6>{data[props.prop.valu].comments.length} Comments</h6>
                    <div className="comment">
                        <input id="guest" type="text" placeholder="Guest Name"></input>
                        <input id="text" type="text" placeholder="Type Comment" maxLength="50"></input>
                        <img onClick={handleCommentAdd} src="https://static.thenounproject.com/png/383448-200.png" alt="#"/>
                    </div>
                </div>
            : null}
        </>
    )
}
export default View