import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SignIn from './pages/sign-in'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='sign-in' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
    </Routes>
  )
}

export default App
