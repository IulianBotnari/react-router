import { useState } from 'react'
import Appheader from './components/AppHeader/AppHeader'
import AppForm from './components/AppForm/AppForm'
import AppPost from './components/AppPost/AppPost'

import './App.css'

function App() {

  const [searchPost, setSearchPost] = useState('')




  return (
    <>
      <div className="container d-flex flex-column mb-3">

        <header className="d-flex justify-content-between p-5">
          <Appheader setSearchData={setSearchPost} />

        </header>

        <main className="p-5">
          <AppForm />

          <AppPost setSearchData={searchPost} />

        </main>





      </div>

    </>
  )
}

export default App
