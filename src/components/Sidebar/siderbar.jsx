import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Sidebar() {
    return (
        <div className="navigation-sidebar">
            <div className="d-flex flex-column flex-shrink-0 sidebar-column">
                <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                    <li className="nav-item">
                        <a href="/" className="nav-link align-items-center justify-content-center nav-link-top" title="Soutěže" data-bs-toggle="tooltip" data-bs-placement="right">
                            <FontAwesomeIcon icon={['fas', 'trophy']} size="xs" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/oddily" className="nav-link align-items-center justify-content-center nav-link-top" title="Oddíly" data-bs-toggle="tooltip" data-bs-placement="right">
                            <FontAwesomeIcon icon={['fas', 'address-book']} size="xs" />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link align-items-center justify-content-center nav-link-top" title="Členové" data-bs-toggle="tooltip" data-bs-placement="right">
                            <FontAwesomeIcon icon={['fas', 'users']} size="xs" />
                        </a>
                        <ul className="submenu dropdown-menu">
                            <li className="nav-item"><a className="nav-link" href="/">Submenu item 1 </a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Submenu item 2 </a></li>
                            <li className="nav-item"><a className="nav-link" href="/">Submenu item 3 </a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link align-items-center justify-content-center nav-link-top" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
                            <FontAwesomeIcon icon={['fas', 'sitemap']} size="xs" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Sidebar;