import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './Pages/Landing.tsx'
import Pricing from './Pages/Pricing.tsx'
import Privacy from './Pages/Privacy.tsx'
import Terms from './Pages/Terms.tsx'
import Chat from './Pages/protected/Chat.tsx'
import Home from './Pages/protected/Home.tsx'
import Library from './Pages/protected/Library.tsx'
import Settings from './Pages/protected/Settings.tsx'
import Profile from './Pages/protected/Profile.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import Explore from './Pages/protected/Explore.tsx'
import Auth from './Pages/Auth.tsx'

function App() {
    return (
      <div className='bg-Background dark:bg-dark-Surface text-Surface min-h-screen dark:text-Accent'> 
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/privacy' element={<Privacy />}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='auth' element={<Auth />}/>

          <Route path='home' element={
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
            }/>
            <Route path='/explore' element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            }/>
          <Route path='/chat' element={
            <ProtectedRoute>
              <Chat />
            </ProtectedRoute>
            }/>
          <Route path='library' element={
            <ProtectedRoute>
              <Library />
            </ProtectedRoute>
          }/>
          <Route path='/settings' element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
            }/>
          <Route path='profile' element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }/>
        </Routes>
      </div>
    )
}

export default App
