import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">QuickNews</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <span style={{ display: 'flex', alignItems: 'center', color: 'white' }}>Made with <a className="nav-link" href="https://newsapi.org/" target='_blank'>News API</a></span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar