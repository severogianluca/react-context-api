import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './layout/DefaultLayout'
import HomePage from './pages/HomePage'
import ChiSiamo from './pages/ChiSiamo'
import ListaDeiPost from './pages/ListaDeiPost'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/ChiSiamo' element={<ChiSiamo />} />
            <Route path='/ListaDeiPost' element={<ListaDeiPost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
