import React from 'react';
import { Link } from "react-router-dom";


function userLogin() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="h2">Login</p>

                        <form method="post" className="login-form card">

                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Enter email address"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="password" name="current_password" placeholder="Enter current password"></input>
                            </div>

                            <div className="form-group forgotten-password">
                                <span className="text-muted">
                                    Forgot Password? 

                                    <Link to="/reset-password/" className="pl-3">Reset</Link>
                                </span>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default userLogin;