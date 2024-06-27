import itReservasi from "@/interfaces/itReservasi";
import axiosAdmin from "@/utils/axiosAdmin";
import convertTanggalIso from "@/utils/convertTanggalIso";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Lihat_reservasi: React.FC = () => {
    const route = useRouter();
    const [data, setData] = useState<itReservasi>()
    const id = typeof window !== "undefined" ? window.location.pathname.split('/')[1] : "";
    const _getData = () => {
        axiosAdmin.get('reservasi/' + id)
            .then((respon: AxiosResponse<any, any>) => {
                if (respon.data.status == "ok") {
                    setData(respon.data.data)
                }
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
                            <button onClick={() => route.back()} className="btn btn-danger">Kembali</button>
                            <h1>Data Reservasi</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Lihat Data Reservasi</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content p-3">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td style={{ background: "#FAFAFA", fontWeight: "bold" }} colSpan={3}>Rincian Jahitan</td>
                                </tr>
                                <tr>
                                    <td>Produk</td>
                                    <td>:</td>
                                    <td>{data?.produk}</td>
                                </tr>
                                <tr>
                                    <td>Waktu Pengambilan</td>
                                    <td>:</td>
                                    <td>{data?.waktu_pengambilan}</td>
                                </tr>
                                <tr>
                                    <td>Deskripsi</td>
                                    <td>:</td>
                                    <td>{data?.deskripsi}</td>
                                </tr>
                                <tr>
                                    <td>Waktu Transaksi</td>
                                    <td>:</td>
                                    <td>{convertTanggalIso(data?.timestamp || '')}</td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#FAFAFA", fontWeight: "bold" }} colSpan={3}>Deskripsi Pengguna</td>
                                </tr>
                                <tr>
                                    <td>Nama</td>
                                    <td>:</td>
                                    <td>{data?.user.nama}</td>
                                </tr>
                                <tr>
                                    <td>Jenis Kelmain</td>
                                    <td>:</td>
                                    <td>{data?.user.jenis_kelamin}</td>
                                </tr>
                                <tr>
                                    <td>Alamat</td>
                                    <td>:</td>
                                    <td>{data?.user.alamat}</td>
                                </tr>
                                <tr>
                                    <td>Nomor Handphone</td>
                                    <td>:</td>
                                    <td>{data?.user.no_handphone}</td>
                                </tr>
                                <tr>
                                    <td style={{ background: "#FAFAFA", fontWeight: "bold" }} colSpan={3}>Layanan Jasa Jahit</td>
                                </tr>
                                <tr>
                                    <td>Nama Penjahit</td>
                                    <td>:</td>
                                    <td>{data?.penjahit.nama_usaha}</td>
                                </tr>
                                <tr>
                                    <td>Alamat Penjahit</td>
                                    <td>:</td>
                                    <td>{data?.penjahit.alamat}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </>);
}

export default Lihat_reservasi;