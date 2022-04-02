import React from 'react';


function Card() {
    return (
        <section className="auth-routes">
            <div className="container">
                <div className="row">
                <div className="col-12">
                    <div className="card">
                        <img height="60" width="60" src="data:image/png;base64,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"/>
                        <div className="card-body">
                            <h5 className="card-title">
                                Authentication Routes
                            </h5>

                            <p className="card-text mt-3">
                                A react authentication project that consumes the rest authentication routes from djangorest-routes 🔐
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
      </section>
    )
}

export default Card;