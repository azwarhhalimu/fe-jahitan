import { itPenjahit } from "@/interfaces/itPenjahit";
import axiosAdmin from "@/utils/axiosAdmin";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const LihatPenjahit: React.FC = () => {
    const route = useRouter();
    const [data, setData] = useState<itPenjahit>()
    const id = typeof window !== "undefined" ? window.location.pathname.split('/')[1] : "";
    const _getData = () => {
        axiosAdmin.get('penjahit/' + id)
            .then((respon: AxiosResponse<any, any>) => {
                setData(respon.data.data);
            })
    }

    useEffect(() => {
        _getData();
    }, [])
    return (<>
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <button onClick={() => {
                                route.back()
                            }} className="btn btn-danger">Kembali</button>
                            <h1>Data Penjahit</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Data Penjahit</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content p-4">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Nama Lengkap</td><td>:</td><td>{data?.user.nama}</td>
                                </tr>
                                <tr>
                                    <td>No Handphone</td><td>:</td><td>{data?.user.no_handphone}</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin</td><td>:</td><td>{data?.user.jenis_kelamin}</td>
                                </tr>
                                <tr>
                                    <td>Nama Usaha</td><td>:</td><td>{data?.nama_usaha}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td><td>:</td><td>{data?.alamat}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </section>
        </div>
    </>);
}

export default LihatPenjahit;