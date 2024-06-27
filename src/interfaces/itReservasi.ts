import React from "react";
type itReservasi = {
  id_reservasi: string;
  id_penjahit: string;
  id_user: string;
  produk: string;
  waktu_pengambilan: string;
  deskripsi: string;
  tanggal_transaksi: string;
  status: string;
  isReview: boolean;
  timestamp: string;
  user: {
    id_user: string;
    nama: string;
    no_handphone: string;
    password: string;
    jenis_kelamin: string;
    alamat: string;
  };
  penjahit: {
    id_penjahit: string;
    id_user: string;
    nama_usaha: string;
    alamat: string;
    url_google_map: string;
  };
};

export default itReservasi;
