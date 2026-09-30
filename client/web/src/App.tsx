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
import FolderDetail from './components/ui/protected/LibraryPage/FolderDetail.tsx'
import AccountInfo from './components/ui/protected/SettingsPage/AccountInfo.tsx'
import About from './components/ui/protected/SettingsPage/About.tsx'
import BackUpData from './components/ui/protected/SettingsPage/BackUpData.tsx'
import Help from './components/ui/protected/SettingsPage/Help.tsx'
import ImportExport from './components/ui/protected/SettingsPage/ImportExport.tsx'
import PasswordSecurity from './components/ui/protected/SettingsPage/PasswordSecurity.tsx'
import Preferences from './components/ui/protected/SettingsPage/Preferences.tsx'
import ForgotPassword from './Pages/ForgotPassword.tsx'
import NotFound from './Pages/NotFound.tsx'

function App() {
    return (
      <div className='bg-Background dark:bg-dark-Background text-Primary-text dark:text-dark-Primary-text'> 
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/pricing' element={<Pricing />}/>
          <Route path='/privacy' element={<Privacy />}/>
          <Route path='/terms' element={<Terms />}/>
          <Route path='auth' element={<Auth />}/>
          <Route path='auth/forgot-password' element={<ForgotPassword/> }/>

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
          <Route path='library/folder/:folderId' element={
            <ProtectedRoute>
              <FolderDetail/>
            </ProtectedRoute>
          }/>
          <Route path='settings/account-info' element={
            <ProtectedRoute>
              <AccountInfo />
            </ProtectedRoute>
          }/>
          <Route path='settings/about' element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }/>
          <Route path='settings/backup-data' element={
            <ProtectedRoute>
              <BackUpData />
            </ProtectedRoute>
          }/>
          <Route path='settings/help' element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }/>
          <Route path='settings/import-export' element={
            <ProtectedRoute>
              <ImportExport />
            </ProtectedRoute>
          }/>
          <Route path='settings/password-security' element={
            <ProtectedRoute>
              <PasswordSecurity />
            </ProtectedRoute>
          }/>
          <Route path='settings/preferences' element={
            <ProtectedRoute>
              <Preferences />
            </ProtectedRoute>
          }/>

          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    )
}

export default App
