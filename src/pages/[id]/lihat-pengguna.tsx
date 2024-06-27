import { itUser } from "@/interfaces/itUser";
import axiosAdmin from "@/utils/axiosAdmin";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const LihatPengguna: React.FC = () => {
    const [data, setData] = useState<itUser>();

    const route = useRouter();
    const id = typeof window !== "undefined" ? window.location.pathname.split('/')[1] : ""
    const getData = () => {

        axiosAdmin.get("user/" + id)
            .then((respon: AxiosResponse<any, any>) => {
                if (respon.data.status == "ok") {
                    setData(respon.data.data)
                }
            })
    }

    useEffect(() => {
        getData();
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
                            <h1>Data Pengguna</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Lihat Pengguna</li>
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
                                    <td>Nama Lengkap</td>
                                    <td>:</td>
                                    <td>{data?.nama}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td>{data?.alamat}</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelamin</td>
                                    <td>:</td>
                                    <td>{data?.jenis_kelamin}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td>{data?.alamat}</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <div>Data Rervasi</div>
                    </div>
                    <div className="card-body">

                        <table className="table">
                            <thead>
                                <tr>
                                    <td>No</td>
                                    <td>Nama Produk</td>
                                    <td>Waktu Pengambilan</td>

                                    <td> Deksripsi </td>
                                    <td>Tanggal Transaksi</td>
                                    <td>Nama Penjahit</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.reservasi.map((list, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{list.produk}</td>
                                        <td>{list.waktu_pengambilan}</td>

                                        <td>{list.deskripsi} </td>
                                        <td>{list.tanggal_transaksi}</td>
                                        <td>{list.penjahit.nama_usaha}</td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                    </div>
                </div >
            </section >
        </div >
    </>);
}

export default LihatPengguna;