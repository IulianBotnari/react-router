import { useEffect, useState } from 'react'

import Style from './AppPost.module.css'

export default function AppPost({ setPostSearchData }) {

    const [posts, setPosts] = useState([])
    const [newPost, setNewPosts] = useState([])


    const searchData = setPostSearchData
    useEffect(() => {
        console.log(searchData);
        setNewPosts(posts.filter(post => post.title.toLowerCase().includes(searchData.toLowerCase())))
    }, [searchData])


    async function fetchPost() {
        try {
            const resp = await fetch('http://127.0.0.1:3000/posts');
            const data = await resp.json();
            setPosts(data);
        } catch (error) {
            console.error('Error:', error);
        }


    }



    useEffect(() => {
        fetchPost()

    }, [posts])


    async function handleDeletePost(e) {
        const btnId = e.target.getAttribute('id-post-btn')
        try {

            const response = await fetch(`http://127.0.0.1:3000/posts/${btnId}`, {
                method: 'DELETE',
            });
            if (response.ok) {

                setPosts(posts.filter(post => post.id !== btnId))
            } else {
                console.error('Post not deleted')
            }
        } catch (error) {
            console.error('Error:', error)
        }
    }








    return (

        <>
            {newPost?.map((post, index) => (

                <div key={index} id-post={post.id} className="">
                    <div className="d-flex justify-content-between p-4" >
                        <h3>{post.title}</h3>
                        <button type="button" className="btn btn-danger" id-post-btn={post.id} onClick={handleDeletePost}>Delete</button>

                    </div>
                    <img className="p-4" src="https://picsum.photos/id/1/200/300" width="" />

                    <p key={index}>{post.content}</p>

                    <p>{post.tags}</p>

                    {post.published && <p>Pubblicato</p>}

                </div>
            ))

            }
        </>
    )
}