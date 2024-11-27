import { useParams, useNavigate } from "react-router"
import { useEffect, useState } from "react"


export default function PostPage() {

    const [post, setPost] = useState([])
    const { id } = useParams();
    console.log(id);

    "127.0.0.1:3000/posts/$:" + id




    async function fetchPost() {
        try {

            const response = await fetch(`http://127.0.0.1:3000/posts/${id}`)

            const data = await response.json()
            setPost(data.data)
            console.log(data.data);



        } catch (error) {
            console.error('Error:', error)
        }
    }


    useEffect(() => {
        fetchPost()
    }, [])






    return (


        <>
            <div key={post.id} id-post={post.id} className="bg-light-subtle my-4 p-4 rounded-5">
                <div className="d-flex justify-content-between" >
                    <h3>{post.title}</h3>


                </div>

                <div className='d-flex'>
                    <div>

                        <img className="my-4 border border-2 border-warning" src="https://picsum.photos/id/1/200/300" width="" />
                    </div>

                    <div className='m-4'>
                        <p key={post.id}><strong>Contenuto: </strong>{post.content}</p>

                        <p><strong>Tags: </strong>{post.tags}</p>

                        {post.published && <p>Pubblicato ✅</p>}

                    </div>

                </div>


            </div>


        </>
    )
}