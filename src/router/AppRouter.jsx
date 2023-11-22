import React from 'react';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='login' element={<LoginScreen />} />
                <Route path='/' element={<CalendarScreen />} />

                <Route path='*' element={<Navigate to={'/'}/>} />
            </Routes>
        </Router>
    );
}
