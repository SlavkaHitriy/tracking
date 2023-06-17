import React from 'react';

// Components
import { Navigate, Route, Routes } from 'react-router-dom';
import { GlobalTracking } from './modules/GlobalTracking/index.js';
import { IndoorTracking } from './modules/IndoorTracking/index.js';
import { Settings } from './modules/Settings/index.js';
import { Header } from './components/Header/index.js';
import { Footer } from './components/Footer/index.js';
import { Assets } from './modules/Assets/index.js'

export const App = () => {
    return (
        <div className={'app'}>
            <Header />
            <main className={'main'}>
                <Routes>
                    <Route
                        path='/global-tracking'
                        element={<GlobalTracking />}
                    />
                    <Route
                        path='/indoor-tracking'
                        element={<IndoorTracking />}
                    />
                    <Route path='/assets' element={<Assets />} />
                    <Route path='/settings' element={<Settings />} />

                    <Route
                        path='*'
                        element={<Navigate to='/global-tracking' replace />}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};
