import { Navigate } from "react-router-dom"
import React from "react"
function ProtectedRoute({children}: { children: React.ReactNode }) {
    const isAuthenticated = true
    if(!isAuthenticated){
        return <Navigate to={'/auth'} replace/>
    }
  return children
}

export default ProtectedRoute