import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


function ListaDeiPost() {


    const [posts, setPosts] = useState([])

    function getList() {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => setPosts(response.data))
    }

    useEffect( getList, [])
    return (

        <>
            <>
                <div className="container">
                    <h1 className="text-center">Lista dei post</h1>
                </div>
                <div className="container">
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
                </div>
            </>
        </>
    )
}

export default ListaDeiPost