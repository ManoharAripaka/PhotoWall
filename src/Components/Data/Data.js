import "./data.css"
import Post from "../Post/Post"
import { useSelector } from "react-redux"
const Data = () => {
    const data = useSelector((state)=>state.post.data)
    const post = data.map((value,id)=> <Post key={id} valu={id} image={value.url} comments={value.comments} caption={value.tag}/>)
    return (
        <div className="data">
          {post}
        </div>
    )
}
export default Data