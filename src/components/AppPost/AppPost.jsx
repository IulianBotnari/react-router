import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useContext } from 'react'

import Style from './AppPost.module.css'
import SetSearchPostContext from '../../Context/SearchPostContext'

export default function AppPost() {

    const [posts, setPosts] = useState([])
    const [newPosts, setNewPosts] = useState([])






    const searchData = useContext(SetSearchPostContext)



    console.log(searchData);

    // useEffect(() => {



    //     setNewPosts(posts.filter(post => post.title.toLowerCase().includes(searchData.toLowerCase())))



    // }, [searchData, posts])


    async function fetchPost() {
        try {
            const resp = await fetch('http://127.0.0.1:3000/posts')
            const data = await resp.json()
            setPosts(data)
        } catch (error) {
            console.error('Error:', error)
        }


    }



    useEffect(() => {
        fetchPost()

    }, [newPosts])


    async function handleDeletePost(e) {
        const btnId = e.target.getAttribute('id-post-btn')
        console.log(btnId);

        try {

            const response = await fetch(`http://127.0.0.1:3000/posts/${btnId}`, {
                method: 'DELETE',
            });
            if (response.ok) {

                setNewPosts(posts.filter(post => post.id !== btnId))
            } else {
                console.error('Post not deleted')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }


    function handNewPageID() {



    }



    return (

        <>
            {posts?.map((post, index) => (

                <div key={index} id-post={post.id} className="bg-light-subtle my-4 p-4 rounded-5">
                    <div className="d-flex justify-content-between" >
                        <Link to={`/post/${post.id}`} onClick={handNewPageID}>
                            <h3>{post.title}</h3>
                        </Link>
                        <button type="button" className="btn btn-danger" id-post-btn={post.id} onClick={handleDeletePost}>Delete</button>

                    </div>

                    <div className='d-flex'>
                        <div>

                            <img className="my-4 border border-2 border-warning" src="https://picsum.photos/id/1/200/300" width="" />
                        </div>

                        <div className='m-4'>
                            <p key={index}><strong>Contenuto: </strong>{post.content}</p>

                            <p><strong>Tags: </strong>{post.tags}</p>

                            {post.published && <p>Pubblicato ✅</p>}

                        </div>

                    </div>


                </div>



            ))

            }
        </>
    )
}