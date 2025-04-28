
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={DefaultLayout}>
          <Route index element={<HomePage />} />

          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
