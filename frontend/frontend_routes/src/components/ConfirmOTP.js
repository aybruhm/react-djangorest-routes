import React from 'react';


function confirmOTPCode() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form method="post" className="confirm-otp-form">
                            <div className="form-group">
                                <input className="form-control" type="number" name="otp_code" placeholder="Enter your OTP code"></input>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">Confirm OTP</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default confirmOTPCode;