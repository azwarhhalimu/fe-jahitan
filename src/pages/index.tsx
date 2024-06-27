import { itPenjahit } from "@/interfaces/itPenjahit";
import axiosAdmin from "@/utils/axiosAdmin"
import { AxiosResponse } from "axios"
import Link from "next/link";
import { useEffect, useState } from "react"

type itDashboard = {
  artikel: number; pengguna: number;
  penjahit: number; produk: number;
  reservasi: number
}
export default function Home() {
  const [data, setData] = useState<itDashboard>();
  const _getData = () => {
    axiosAdmin.get('dashboard')
      .then((respon: AxiosResponse<any, any>) => {
        setData(respon.data.data);
      })
  }
  useEffect(() => {
    _getData();
  }, [])

  return (
    <>
      <div>
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Dashboard</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        <section className="content p-3">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>{data?.pengguna}</h3>
                  <p>Data Pengguna</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag" />
                </div>
                <Link href="/pengguna.html" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-success">
                <div className="inner">
                  <h3>{data?.penjahit}<sup style={{ fontSize: 20 }}></sup></h3>
                  <p>Data Penjahit</p>
                </div>
                <div className="icon">
                  <i className="ion ion-stats-bars" />
                </div>
                <Link href="/penjahit.html" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-warning">
                <div className="inner">
                  <h3>{data?.reservasi}</h3>
                  <p>Pengguna Reservasi</p>
                </div>
                <div className="icon">
                  <i className="ion ion-person-add" />
                </div>
                <Link href="/reservasi.html" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="small-box bg-danger">
                <div className="inner">
                  <h3>{data?.produk}</h3>
                  <p>Produk Penjahit</p>
                </div>
                <div className="icon">
                  <i className="ion ion-pie-graph" />
                </div>
                <Link href="/produk.html" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></Link>
              </div>
            </div>
          </div>

        </section>
      </div>
    </>
  )
}