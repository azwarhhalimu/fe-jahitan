import { baseUrl } from "@/utils/axiosAdmin";
import axios, { AxiosResponse } from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { FormEvent } from "react";
import { useState } from 'react';

const Login: React.FC = () => {
    const route = useRouter();
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const _login = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.post(baseUrl + 'autenticated/login-admin', {
            username: username,
            password: password,

        }, {
            withCredentials: true,
        }).then((respon: AxiosResponse<any, any>) => {
            if (respon.data.status == "success") {

                alert('Login sukses');
                window.localStorage.setItem('i_nama', respon.data.data.nama)
                window.localStorage.setItem('i_username', respon.data.data.username)
                window.localStorage.setItem('i_token', respon.data.data.data_login)
                route.push('/')

            }
            else {
                alert('Usrname atau password tidak benar')
            }
        })
    }
    return (<>
        <Head>
            <title>Login</title>
        </Head>
        <div style={{ display: "flex", minHeight: "100vh", width: "100%", alignItems: "center" }}>
            <div className="login-box" style={{ margin: "auto" }}>
                {/* /.login-logo */}
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <a href="../../index2.html" className="h1"><b>Login  Administrator</b></a>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Silahkan Login</p>
                        <form onSubmit={_login} method="post">
                            <div className="input-group mb-3">
                                <input
                                    onChange={(e) => {
                                        setUsername(e.target.value)
                                    }}
                                    required
                                    type="text" className="form-control" placeholder="username" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-user" />
                                    </div>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    required
                                    onChange={(e) => {
                                        setPassword(e.target.value)
                                    }} type="password" className="form-control" placeholder="Password" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-8">
                                    <div className="icheck-primary">
                                        <input type="checkbox" id="remember" />
                                        <label htmlFor="remember">
                                            Remember Me
                                        </label>
                                    </div>
                                </div>
                                {/* /.col */}
                                <div className="col-4">
                                    <button type="submit" className="btn btn-primary btn-block">Login</button>
                                </div>
                                {/* /.col */}
                            </div>
                        </form>

                    </div>
                    {/* /.card-body */}
                </div>
                {/* /.card */}
            </div>
        </div>


    </>);
}

export default Login;