import Kosong from "@/componen/Kosong";
import { itUser } from "@/interfaces/itUser";
import axiosAdmin from "@/utils/axiosAdmin";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Pengguna: React.FC = () => {
    const [data, setData] = useState<itUser[]>([])
    const [kosong, setKosong] = useState(false);
    const route = useRouter();
    const _getData = () => {
        axiosAdmin.get('user')
            .then((respon: AxiosResponse<any, any>) => {
                setData(respon.data.data);
                if (respon.data.data.length == 0) {
                    setKosong(true);
                }
            })
    }
    const [reload, setReload] = useState(0);
    const _deletePengguna = (id: string) => {
        const confirm = window.confirm('Apakah anda ingin  menghapus data ini?');
        if (confirm) {
            axiosAdmin.delete('user/' + id)
                .then((respon: AxiosResponse<any, any>) => {
                    if (respon.data.status == "success") {
                        alert('Data berhasil di hapus');
                        setReload(reload + 1);
                    }
                })
        }
    }
    useEffect(() => {
        _getData();
    }, [reload])
    return (<>
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Data Pengguna</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Data Pengguna</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content p-3">
                <div className="card">
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <tr style={{ fontWeight: "bold" }}>
                                    <td>No</td>
                                    <td>Nama</td>
                                    <td>No Handphone</td>
                                    <td>Jenis Kelamin</td>
                                    <td>Alamat</td>
                                    <td>Opsi</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((list, index) => (
                                    <tr key={`${index}`}>
                                        <td>{index + 1}</td>
                                        <td>{list.nama}</td>
                                        <td>{list.no_handphone}</td>
                                        <td>{list.jenis_kelamin}</td>
                                        <td>{list.alamat}</td>
                                        <td style={{ textAlign: "right" }}>
                                            <button onClick={() => _deletePengguna(list.id_user)} className="btn btn-danger">Hapus</button>
                                            <button onClick={() => { route.push('/' + list.id_user + "/lihat-pengguna") }} className="btn btn-success">Lihat</button>
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

export default Pengguna;