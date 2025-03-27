import {
  Route,
  Routes,
  BrowserRouter,
  useLocation
 } from 'react-router-dom'
import { useLayoutEffect } from 'react'


import Home from './pages/Home'
import About from './pages/About'
import CourseTemplate from './pages/CourseTemplate'
import Contact from './pages/Contact'
import Register from './pages/Register'

function Wrapper({ children }) {
  let location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'instant'})
  }, [location.pathname])

  return children
}

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses/:id" element={<CourseTemplate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App
