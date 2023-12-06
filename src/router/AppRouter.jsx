import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { PublicRoute } from './PublicRoute'; 
import { PrivateRoute } from './PrivateRoute';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen';
import { CalendarScreen } from '../components/calendar/CalendarScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector(state => state.auth);
    
    useEffect(() => { dispatch(startChecking()) }, [dispatch]);

    if (checking) {
        return <h5>Espere...</h5>
    }

    return (
        <Router>
            <Routes>

                <Route path='login' element={<PublicRoute isAuthenticated={!!uid} />}>
                    <Route path='/login' element={<LoginScreen />} />
                </Route>

                <Route path='/' element={<PrivateRoute isAuthenticated={!!uid} />}>
                    <Route path='/' element={<CalendarScreen />} />
                </Route>

                <Route path='*' element={<Navigate to={'/'} />} />

            </Routes>
        </Router>
    );
}
