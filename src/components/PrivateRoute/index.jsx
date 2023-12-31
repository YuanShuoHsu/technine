import React from 'react'
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ isAuthenticated, children }) {

    if (!isAuthenticated) {
        return <Navigate replace to="/" />
    }

    return children
}
