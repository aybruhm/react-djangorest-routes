import React from 'react';


function userLogin() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form method="post" className="login-form">

                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Enter email address"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="password" name="current_password" placeholder="Enter current password"></input>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default userLogin;