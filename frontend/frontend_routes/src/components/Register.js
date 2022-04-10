import React from 'react';


function userRegister() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form method="post" className="register-form">

                            <div className="form-group">
                                <input className="form-control" type="text" name="first_name" placeholder="Enter firstname"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="text" name="last_name" placeholder="Enter lastname"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="text" name="username" placeholder="Enter username"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="text" name="phone_number" placeholder="Enter phone number"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Enter email address"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="password" name="password" placeholder="Enter current password"></input>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default userRegister;