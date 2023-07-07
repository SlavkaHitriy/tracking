import React from 'react';

import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Settings } from './modules/Settings/index.js';
import { Header } from './components/Header/index.js';
import { Footer } from './components/Footer/index.js';
import { Assets } from './modules/Assets/index.js';
import { Tracking } from './modules/Tracking';
import { Reporting } from './modules/Reporting';
import { Login } from './modules/Login/index.js';
import { Forgot } from './modules/Forgot/index.js';
import { Register } from './modules/Register/index.js';
import { Success } from './modules/Success/index.js';

export const App = () => {
    const location = useLocation();

    return (
        <div className={'app'}>
            {!location.pathname.includes('auth') && <Header />}
            <main className={'main'}>
                <Routes>
                    <Route path='/tracking' element={<Tracking />} />
                    <Route path='/assets' element={<Assets />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/reporting' element={<Reporting />} />

                    <Route path='/auth/login' element={<Login />} />
                    <Route path='/auth/register' element={<Register />} />
                    <Route path='/auth/success' element={<Success />} />
                    <Route path='/auth/forgot-password' element={<Forgot />} />

                    <Route
                        path='*'
                        element={<Navigate to='/tracking' replace />}
                    />
                </Routes>
            </main>
            {!location.pathname.includes('auth') && <Footer />}
        </div>
    );
};
