import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    const user = useSelector(state => state.isLogged)
    
    if (!user) {
        return <Navigate to='/' replace />
    }
    return <Outlet />
}

export default PrivateRoute