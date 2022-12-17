import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import { GlobalTracking } from '../core/modules/GlobalTracking'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/global-tracking' element={<GlobalTracking/>}/>

            <Route path='*' element={<Navigate to='/global-tracking' replace/>}/>
        </Routes>
    )
}
