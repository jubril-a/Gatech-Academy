import {
  Route,
  Routes
 } from 'react-router-dom'

import Home from './pages/Home'
import CourseTemplate from './pages/CourseTemplate'
import Contact from './pages/Contact'
import Register from './pages/Register'

function App() {

  return (
    <Routes>
      <Route path="/" element=<Home /> />
      <Route path="/courses/:id" element=<CourseTemplate /> />
      <Route path="/contact" element=<Contact /> />
      <Route path="/register" element=<Register /> />
      <Route path="*" element=<h1>404 Not Found</h1> />
    </Routes>
  )
}

export default App
