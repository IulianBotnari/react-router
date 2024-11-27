import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import AppForm from './components/AppForm/AppForm'
import AppPost from './components/AppPost/AppPost'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import About from './pages/About'
import CreatePost from './pages/CreatePost'
import PostPage from './pages/PostPage'
import AppSearch from "./components/AppSearch/AppSearch"
import SearchPostContext from "./Context/SearchPostContext"
import { useContext } from 'react'
import SetSearchPostContext from './Context/SetSearchPostContext'


import './App.css'

function App() {

  // const [searchPost, setSearchPost] = useState('')
  // console.log(searchPost);




  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/about" element={<About />} />
            <Route path="/addpost" element={<CreatePost />} />
            <Route path="/post/:id" element={<PostPage />} />




          </Route>
        </Routes>
      </BrowserRouter>



    </>
  )
}

export default App
