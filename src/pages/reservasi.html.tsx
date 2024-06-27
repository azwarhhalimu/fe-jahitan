import React, { useEffect, useState } from "react";
import axiosAdmin from '@/utils/axiosAdmin';
import { AxiosResponse } from "axios";
import itReservasi from "@/interfaces/itReservasi";
import convertTanggalIso from "@/utils/convertTanggalIso";
import { useRouter } from "next/router";

const Reservasi: React.FC = () => {
    const [data, setData] = useState<itReservasi[]>([]);
    const _getData = () => {
        axiosAdmin.get('reservasi')
            .then((respon: AxiosResponse<any, any>) => {
                if (respon.data.status == "ok") {
                    setData(respon.data.data);
                }
            })
    }
    useEffect(() => {
        _getData();
    }, [])
    const route = useRouter();
    return (<>
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Reservasi</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Reservasi</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content p-3">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr style={{ fontWeight: "bold" }}>
                                    <td>No</td>
                                    <td>Produk</td>
                                    <td>Waktu</td>
                                    <td>Tanggal Transaksi</td>
                                    <td>Status</td>
                                    <td>Opsi</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((list, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{list.produk}</td>
                                        <td>{list.waktu_pengambilan}</td>
                                        <td>{convertTanggalIso(list.timestamp)}</td>
                                        <td>{list.status}</td>
                                        <td style={{ textAlign: "right" }}>

                                            <button
                                                onClick={() => route.push('/' + list.id_reservasi + '/lihat-reservasi')}
                                                className="btn btn-primary">Lihat Transaksi</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </>);
}

export default Reservasi;