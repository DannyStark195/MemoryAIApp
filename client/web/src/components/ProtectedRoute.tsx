import { Navigate } from "react-router-dom"

function ProtectedRoute({children}) {
    const isAuthenticated = true
    if(!isAuthenticated){
        return <Navigate to={'/auth'} replace/>
    }
  return children
}

export default ProtectedRoute