

import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Style from '../components/AppForm/AppForm.module.css'

export default function CreatePost() {
    const [addPost, setAddPost] = useState({
        title: '',
        id: Date.now().toString(),
        content: '',
        image: '',
        tags: [],
        published: true,
    });

    const navigate = useNavigate()


    const handleFormSubmit = (e) => {
        e.preventDefault();


        fetch('http://127.0.0.1:3000/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(addPost),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Successfully added post', data)

                setAddPost({
                    title: '',
                    id: '',
                    content: '',
                    image: '',
                    tags: [],
                    published: false,
                });
            })
            .catch(err => {
                console.error('Error adding post', err)
            });



        navigate('/posts')



    };

    return (
        <form onSubmit={handleFormSubmit} className="mb-5">
            <label>Titolo</label>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Inserisci titolo"
                value={addPost.title}
                onChange={(e) => setAddPost({ ...addPost, title: e.target.value })}
            />
            <div className="mb-3">
                <label htmlFor="content" className="form-label">
                    Scrivi ciò che desideri
                </label>
                <textarea
                    className="form-control"
                    id="content"
                    rows="3"
                    value={addPost.content}
                    onChange={(e) => setAddPost({ ...addPost, content: e.target.value })}
                />
            </div>

            <label>Immagine</label>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Inserisci url immagine"
                value={addPost.image}
                onChange={(e) => setAddPost({ ...addPost, image: e.target.value })}
            />

            <label>Tag</label>
            <input
                className="form-control mb-3"
                type="text"
                placeholder="Inserisci tag"
                value={addPost.tags.join(', ')}
                onChange={(e) => setAddPost({ ...addPost, tags: e.target.value.split(',') })}
            />

            <div className="form-check mb-3">
                <input
                    className={`form-check-input ${Style.check_box_width}`}
                    type="checkbox"
                    id="check_published"
                    checked={addPost.published}
                    onChange={(e) => setAddPost({ ...addPost, published: e.target.checked })}
                />

                <label className="form-check-label" htmlFor="check_published">
                    Pubblico/NonPubblico
                </label>
            </div>

            <button type="submit" className="btn btn-primary">
                Publica
            </button>

        </form>
    )
}
