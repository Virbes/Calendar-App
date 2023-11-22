import React from 'react';

export const Navbar = () => {
    return (
        <div className='navbar navbar-dark bg-dark mb-4 px-3'>
            <span className='navbar-brand'>Griz</span>

            <button className="btn btn-outline-danger">
                <i className='fas fa-sign-out-alt'></i>
                <span> Salir</span>
            </button>
        </div>
    );
}
