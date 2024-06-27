export type itProduk = {
  id_produk: string;
  id_user: string;
  nama_produk: string;
  rentang_harga: string;
  deskripsi: string;
  user: {
    id_user: string;
    nama: string;
    no_handphone: string;
    password: string;
    jenis_kelamin: string;
    alamat: string;
    token: string;
    penjahit: {
      id_penjahit: string;
      id_user: string;
      nama_usaha: string;
      alamat: string;
      url_google_map: string;
    };
  };
};
