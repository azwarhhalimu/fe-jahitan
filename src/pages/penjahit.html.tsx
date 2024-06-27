import Kosong from "@/componen/Kosong";
import { itPenjahit } from "@/interfaces/itPenjahit";
import axiosAdmin from "@/utils/axiosAdmin";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Penjahit: React.FC = () => {
    const [data, setData] = useState<itPenjahit[]>([]);
    const [isKossong, setIsKosong] = useState(false);
    const [reload, setReload] = useState(0);
    const route = useRouter();
    const _hapusPenjahit = (id: string) => {
        const confirm = window.confirm('Apakah anda ingin menghapus data ini');
        if (confirm)
            axiosAdmin.delete('penjahit/' + id)
                .then((respon: AxiosResponse) => {
                    if (respon.data.status == "success") {
                        alert('Data berhasil di hapus')
                        setReload(reload + 1)
                    }
                })
    }
    const _getData = () => {
        axiosAdmin.get('penjahit')
            .then((respon: AxiosResponse<any, any>) => {
                setData(respon.data.data);
                if (respon.data.data.length == 0) {
                    setIsKosong(true);
                }
            })
    }
    useEffect(() => { _getData() }, []);
    return (<>
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
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
            <section className="content p-3">
                <div className="card">
                    <div className="card-body">
                        <table className="table">
                            <thead>
                                <tr style={{ fontWeight: "bold" }}>
                                    <td>No</td>
                                    <td>Nama Lengkap</td>
                                    <td>Nama Usaha Jahit</td>
                                    <td>Alamat</td>
                                    <td>Username</td>
                                    <td>Opsi</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((list, index) => (
                                    <tr key={`${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{list.user.nama}</td>
                                        <td>{list.nama_usaha}</td>
                                        <td>{list.alamat}</td>
                                        <td>{list.user.no_handphone}</td>
                                        <td style={{ textAlign: "right" }}>
                                            <button onClick={() => _hapusPenjahit(list.id_penjahit)} className="btn btn-danger">Hapus</button>
                                            <button onClick={() => {
                                                route.push('/' + list.id_penjahit + "/lihat-penjahit")
                                            }} className="btn btn-primary">Lihat Data</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                        {isKossong && <Kosong />}
                    </div>
                </div>
            </section>
        </div>
    </>);
}

export default Penjahit;