import React from 'react';
import Swal from 'sweetalert2';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { startLogin, startRegister } from '../../actions/auth';

import './login.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();

    const [formLoginValues, handleLoginInputChange] = useForm({
        login_email: 'francisco@gmail.com',
        login_password: '123456'
    });

    const [formRegisterValues, handleRegisterInputChange] = useForm({
        register_name: 'Francisco',
        register_email: 'franciso.virbes@gmail.com',
        register_password: '123456',
        register_password2: '123456'
    });


    const { login_email, login_password } = formLoginValues;
    const { register_name, register_email, register_password, register_password2 } = formRegisterValues;


    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLogin(login_email, login_password));
    }

    const handleRegister = (e) => {
        e.preventDefault();

        if (register_password !== register_password2) {
            return Swal.fire('Error', 'Las contraseñas no coinciden', 'error');
        }

        dispatch(startRegister(register_name, register_email, register_password));
    }



    return (
        <div className="container login-container">
            <div className="row">

                {/* LOGIN */}
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={handleLogin}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                name='login_email'
                                className="form-control"
                                placeholder="Correo"
                                value={login_email}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name='login_password'
                                className="form-control"
                                placeholder="Contraseña"
                                value={login_password}
                                onChange={handleLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                {/* REGISTER */}
                <div className="col-md-6 login-form-2">
                    <h3>Registro</h3>
                    <form onSubmit={handleRegister}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                name='register_name'
                                className="form-control"
                                placeholder="Nombre"
                                value={register_name}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                name='register_email'
                                className="form-control"
                                placeholder="Correo"
                                value={register_email}
                                onChange={handleRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name='register_password'
                                className="form-control"
                                placeholder="Contraseña"
                                value={register_password}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                name='register_password2'
                                className="form-control"
                                placeholder="Repita la contraseña"
                                value={register_password2}
                                onChange={handleRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}