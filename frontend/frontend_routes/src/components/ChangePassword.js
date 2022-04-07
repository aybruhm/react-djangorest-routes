import React from 'react';


function changePassword() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form method="post" className="change-password-form">
                            <div className="form-group">
                                <input className="form-control" type="password" name="current_password" placeholder="Enter current password"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="password" name="new_password" placeholder="Enter new password"></input>
                            </div>

                            <div className="form-group">
                                <input className="form-control" type="password" name="repeat_password" placeholder="Confirm new password"></input>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary">Change Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default changePassword;