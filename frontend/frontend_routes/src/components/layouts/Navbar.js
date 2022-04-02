import React from 'react';


function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container">
                <span class="navbar-brand mb-0 h1">react-djangorest-routes</span>
            </div>


            <a href="#" class="btn btn-link px-3 me-2">
                register
            </a>

            <a href="#" class="btn btn-link px-3 me-2">
                Login
            </a>
        </nav>
    )
}

export default Navbar;