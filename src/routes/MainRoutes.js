import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

// Pages
import { GlobalTracking } from '../core/modules/GlobalTracking'
import { IndoorTracking } from '../core/modules/IndoorTracking'
import { Settings } from '../core/modules/Settings'

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/global-tracking' element={<GlobalTracking/>}/>
            <Route path='/indoor-tracking' element={<IndoorTracking/>}/>
            <Route path='/settings' element={<Settings/>}/>

            <Route path='*' element={<Navigate to='/global-tracking' replace/>}/>
        </Routes>
    )
}
