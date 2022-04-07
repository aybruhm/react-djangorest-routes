import React from 'react';


function resendOTPCode() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form method="post" className="resend-otp-form">
                            <div className="form-group">
                                <input className="form-control" type="email" name="email" placeholder="Enter your email address"></input>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">Resend OTP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default resendOTPCode;