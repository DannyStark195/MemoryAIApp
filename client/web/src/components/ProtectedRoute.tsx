import { Navigate } from "react-router-dom"

function ProtectedRoute({children}) {
    const isAuthenticated = false
    if(!isAuthenticated){
        return <Navigate to={'/auth'} replace/>
    }
  return children
}

export default ProtectedRoute