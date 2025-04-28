import { Link } from "react-router-dom";
import PostContext from "../context/PostContext";
import { useContext } from "react";
function CardPost() {

    const{posts} = useContext(PostContext)
    return (
        <>
            {posts.map((post) => (
                <div key={post.id}>
                    <div>
                        <p>{post.id}</p>
                        <Link to={`${post.id}`}><h5>{post.title}</h5></Link>
                        <p>{post.body}</p>
                        <hr />
                    </div>
                </div>

            ))}
        </>
    )
}

export default CardPost