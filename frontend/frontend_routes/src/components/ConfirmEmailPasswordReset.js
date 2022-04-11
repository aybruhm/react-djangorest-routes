import React from 'react';
import { Link } from "react-router-dom";


function ConfirmEmailPasswordReset() {

    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <img height="60" width="60" alt="confirm-password-reset" src="https://img.icons8.com/wired/64/000000/sent.png"/>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Confirm Password Reset
                                </h5>

                                <p className="card-text mt-3">
                                    We have sent you an OTP code to reset your password. <br /> Kindly check your email inbox to proceed.
                                </p>

                                <div class="center_proceed_link">
                                    <Link to="/reset-password-confirm/" class="proceed__btn">Proceed</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ConfirmEmailPasswordReset;