import menuOpen from "@/state/menuOpen";
import React from "react";

const Nav: React.FC = () => {
    const menuOpx = menuOpen();
    return (<>
        <nav className="main-header navbar navbar-expand navbar-dark">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a onClick={() => {
                        menuOpx.setMenuOpen();
                    }} className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>

            </ul>

        </nav>
    </>);
}

export default Nav;