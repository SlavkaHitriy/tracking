import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Settings } from './modules/Settings/index.js';
import { Header } from './components/Header/index.js';
import { Footer } from './components/Footer/index.js';
import { Assets } from './modules/Assets/index.js';
import { Tracking } from './modules/Tracking';
import { Reporting } from './modules/Reporting';

export const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <main className={'main'}>
                <Routes>
                    <Route path='/tracking' element={<Tracking />} />
                    <Route path='/assets' element={<Assets />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/reporting' element={<Reporting />} />

                    <Route
                        path='*'
                        element={<Navigate to='/tracking' replace />}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};
