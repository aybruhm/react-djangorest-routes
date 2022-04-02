import React from 'react';


function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <span className="navbar-brand mb-0 h1">react-djangorest-routes</span>
            </div>


            <div className="auth-lists">
                <a href="#" className="btn btn-link px-3 me-2">
                    register
                </a>

                <a href="#" className="btn btn-link px-3 me-2">
                    Login
                </a>
            </div>

            <button
                className="navbar-toggler"
                type="button"
                data-mdb-toggle="collapse"
                data-mdb-target="#auth-lists-mobile-content"
                aria-controls="auth-lists-mobile-content"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <i className="fas fa-bars"></i>
            </button>

            <div className="auth-lists-mobile" id="auth-lists-mobile-content">
                <a href="#" className="btn btn-link px-3 me-2">
                    register
                </a>

                <a href="#" className="btn btn-link px-3 me-2">
                    Login
                </a>
            </div>
        </nav>
    )
}

export default Navbar;