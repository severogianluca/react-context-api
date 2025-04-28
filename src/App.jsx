
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import DefaultLayout from './layout/DefaultLayout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={DefaultLayout}>
            <Route />

          </Route>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
