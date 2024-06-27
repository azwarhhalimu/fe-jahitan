import Kosong from "@/componen/Kosong";
import { itProduk } from "@/interfaces/itProduk";
import axiosAdmin from "@/utils/axiosAdmin";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

const Produk: React.FC = () => {
    const [data, setData] = useState<itProduk[]>([]);
    const [kosong, setKosong] = useState(false);
    const _delete = (id: string) => {
        const confir = window.confirm('Apakah anda ingin menghapus data ini?')
        if (confir)
            axiosAdmin.delete('produk/' + id)
                .then((respon: AxiosResponse<any, any>) => {
                    if (respon.data.status == "success") {
                        alert('Data berhasil di hapus');
                        _getProduk();
                    }
                })
    }
    const _getProduk = () => {
        axiosAdmin.get('produk')
            .then((respon: AxiosResponse<any, any>) => {
                if (respon.data.status == "ok") {
                    setData(respon.data.data);

                    if (respon.data.data.length == 0)
                        setKosong(true)
                }
            })
    }
    useEffect(() => { _getProduk() }, [])
    return (<>
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Data Produk</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Data Produk</li>
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
                                    <td>Nama Produk</td>
                                    <td>Harga</td>
                                    <td>Deskripsi</td>
                                    <td>Penjahit</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((list, index) => (
                                    <tr key={`${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{list.nama_produk}</td>
                                        <td>{list.rentang_harga}</td>
                                        <td>{list.rentang_harga}</td>
                                        <td>{list.user.penjahit.nama_usaha}</td>
                                        <td style={{ textAlign: "right" }}>
                                            <button onClick={() => {
                                                _delete(list.id_produk)
                                            }} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        {kosong && <Kosong />}
                    </div>
                </div>
            </section>
        </div>
    </>);
}

export default Produk;