import React from 'react';


function resetPasswordOTP() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">

                        <p className="h2">Reset Password</p>

                        <form method="post" className="card reset-password-form">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Enter your email address"></input>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" type="submit">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default resetPasswordOTP;