import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import AppSearch from './components/AppSearch/AppSearch'
import AppForm from './components/AppForm/AppForm'
import AppPost from './components/AppPost/AppPost'
import Layout from './components/Layout'
import Home from './pages/Home'
import Posts from './pages/Posts'
import About from './pages/About'

import './App.css'

function App() {

  const [searchPost, setSearchPost] = useState('')




  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout setSearchData={setSearchPost} />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts searchData={searchPost} />} />
            <Route path="/about" element={<About />} />



          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
