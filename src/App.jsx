import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import ListaDeiPost from './pages/ListaDeiPost'
import PostContext from './context/PostContext'
import axios from "axios"
import { useEffect, useState } from "react"



function App() {

  const [posts, setPosts] = useState([])

  function getList() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
  }

  useEffect(getList, [])

  return (
    <>
      <PostContext.Provider value={{posts}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path='/ChiSiamo' element={<ChiSiamo />} />
              <Route path='/ListaDeiPost' element={<ListaDeiPost />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>

    </>
  )
}

export default App;
