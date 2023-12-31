import Swal from 'sweetalert2';
import { fetchConToken, fetchSinToken } from '../helpers/fetch'
import { types } from '../types/types';

export const startLogin = (email, password) => async (dispatch) => {

    const response = await fetchSinToken('auth', { email, password }, 'POST');
    const body = await response.json();


    if (body.ok) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(login({ uid: body.uid, name: body.name }));
    } else {
        Swal.fire('Error', body.msg, 'error');
    }


}


export const startRegister = (name, email, password) => async (dispatch) => {

    const response = await fetchSinToken('auth/new', { name, email, password }, 'POST');
    const body = await response.json();

    if (body.ok) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(login({ uid: body.uid, name: body.name }));
    } else {
        Swal.fire('Error', body.msg, 'error');
    }

}

export const startChecking = () => async (dispatch) => {

    const response = await fetchConToken('auth/renew');
    const body = await response.json();

    if (body.ok) {
        localStorage.setItem('token', body.token);
        localStorage.setItem('token-init-date', new Date().getTime());

        dispatch(login({ uid: body.uid, name: body.name }));
    } else {
        dispatch(checkingFinish());
    }
}

export const startLogout = () => (dispatch) => {
    localStorage.clear();
    dispatch(logout());
}





const checkingFinish = () => ({
    type: types.authCheckingFinish
});

const login = (user) => ({
    type: types.authLogin, payload: user
});

const logout = () => ({
    type: types.authLogout
});