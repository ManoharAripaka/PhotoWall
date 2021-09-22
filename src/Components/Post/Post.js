import "./post.css"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { remove } from "../../store/Store"
import { toast } from "react-toastify"
import View from "../View/View"
const Post = (props) => {
    toast.configure()
    const [enable, setEnable] = useState(false)
    const [prop, setProp] = useState({})
    const [count,setCount] = useState(0)
    const [val,setVal] = useState(0)
    const cap =  (props.caption === "") ? <i>No Caption</i> : props.caption
    const dispatch = useDispatch()
    const handleRemove = (e) => {
        dispatch(remove({e}))
        toast.error("Post removed",{position: toast.POSITION.BOTTOM_CENTER})
    }
    return (
        <>
            <div className="post">
                <img onClick={()=>{setEnable(true);setProp(props);setCount(props.comments.length);setVal(props.valu)}} id="image" src={props.image} alt="#"/>
                <p id="caption-text"><span id="caption">Caption: </span>{cap}</p>
                <p id="count" onClick={()=>{setEnable(true);setProp(props);setCount(props.comments.length);setVal(props.valu)}}>{props.comments.length} Comments</p>
                <p id="remove" onClick={()=>handleRemove(props.valu)}>Remove</p>
            </div>
            <View cap={cap} prop={prop} val={val} setCount={setCount} count={count} enable={enable} setEnable={setEnable}/>
        </>
    )
}
export default Post