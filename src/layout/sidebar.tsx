
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CloseButton } from "react-bootstrap";
import { Box, Compass, Cpu, Dash, Explicit, Newspaper, Person, Xbox } from "react-bootstrap-icons";
type itMenu = {
    label: string;
    url: string;
    icon: any,
}
const Sidebar: React.FC = () => {
    const menu: itMenu[] = [
        {
            label: "Dashboard",
            url: "/",
            icon: <Dash />,
        },
        {
            label: "Penjahit",
            url: "/penjahit.html",
            icon: <Xbox />,
        },
        {
            label: "Pengguna",
            url: "/pengguna.html",
            icon: <Person />,
        },
        {
            label: "Data Reservasi",
            url: "/reservasi.html",
            icon: <Box />,
        },
        {
            label: "Produk",
            url: "/produk.html",
            icon: <Compass />,
        },
        {
            label: "Artikel",
            url: "/artikel.html",
            icon: <Newspaper />,
        },


    ];
    const [nama, setNama] = useState<string>('');

    useEffect(() => {
        if (typeof window !== "undefined") {
            const c = window.localStorage.getItem('i_nama');
            if (c != null) {
                setNama(c);
            }

        }
    }, [])
    return (<>
        <aside style={{ position: "fixed" }} className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Admin</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>

                    <div className="info">
                        <a href="#" className="d-block">{nama}</a>
                    </div>
                </div>
                {/* SidebarSearch Form */}
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-header">EXAMPLES</li>
                        {menu.map((list, index) => (
                            <li key={`${index}`} className="nav-item">
                                <Link href={list.url} className="nav-link">
                                    {list.icon} {" "}

                                    <p>
                                        {list.label}
                                    </p>
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <Link onClick={() => {
                                const c = window.confirm('Apakah anda ingin logout');
                                if (c) {
                                    window.localStorage.removeItem('i_username')
                                    window.localStorage.removeItem('i_nama')
                                    window.location.href = "/login.html"
                                }
                            }} href={'#'} className="nav-link">
                                <Explicit />

                                <p>
                                    Logout
                                </p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    </>);
}

export default Sidebar;