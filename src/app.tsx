import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='sign-in' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  )
}

export default App
