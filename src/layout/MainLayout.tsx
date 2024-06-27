import React, { ReactNode, useEffect } from "react";
import Footer from "./footer";
import Sidebar from "./sidebar";
import menuOpen from "@/state/menuOpen";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '@/layout/nav';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    const menuOpenx = menuOpen();
    useEffect(() => {
        document.body.style.backgroundColor = '#373D43';
    }, [])
    return (<>
        <div className={`hold-transition dark-modex ${menuOpenx.menuOpen && 'sidebar-collapse'}  sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed`}>
            <div className="wrapper">

                <Nav />
                <Sidebar />
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    {children}
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
                {/* Main Footer */}
                <Footer />
            </div>
        </div></>);
}

export default MainLayout;