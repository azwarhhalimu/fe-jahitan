import Kosong from '@/componen/Kosong';
import { itArtikel } from '@/interfaces/itArtikel';
import axiosAdmin, { baseUrl } from '@/utils/axiosAdmin';
import convertTanggalIso from '@/utils/convertTanggalIso';
import axios, { AxiosResponse } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
const Berita: React.FC = () => {
    const [kosong, setKosong] = useState(false);
    const route = useRouter();
    const [data, setData] = useState<itArtikel[]>([])
    const _getData = () => {
        axiosAdmin.get('artikel')
            .then((respon: AxiosResponse<any, any>) => {
                if (respon.data.status == "ok") {
                    setData(respon.data.data);
                    if (respon.data.data.length == 0) {
                        setKosong(true)
                    }
                }

            })
    }
    const _delete = (id: string) => {
        const c = window.confirm('Apakah anda ingin menghpuas data ini?')
        if (c) {
            axiosAdmin.delete('artikel/' + id)
                .then((respon: AxiosResponse<any, any>) => {
                    if (respon.data.status == "success") {
                        alert('Data berhasil di hapus')
                        _getData()
                    }
                })
        }
    }
    useEffect(() => {
        _getData()
    }, [])
    return (<>
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">

                            <h1>Artikel</h1>
                        </div>
                        <div className="col-sm-6">

                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Artikel</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content p-3">
                <div className='card'>
                    <div className='card-header' style={{ display: "flex", justifyContent: "space-between", textAlign: "right" }}>

                        <button onClick={() => {
                            route.push('/tambah-artikel.html')
                        }} className='btn btn-danger pull-end pull-right float-end'>Tambah Data</button>

                    </div>
                    <div className='card-body'>
                        <table className='table'>
                            <thead>
                                <tr style={{ fontWeight: "bold" }}>
                                    <td>No</td>
                                    <td>Thum</td>
                                    <td>Judul</td>
                                    <td>Waktu</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((list, index) => (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>
                                            <img src={baseUrl + "images/load/artikel/100/" + list.id_artikel} />
                                        </td>
                                        <td>{list.judul}</td>
                                        <td>{convertTanggalIso(list.timestamp)}</td>
                                        <td style={{ textAlign: "right" }}>
                                            <button onClick={() => _delete(list.id_artikel)} className='btn btn-danger'>Hapus</button>
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

export default Berita;