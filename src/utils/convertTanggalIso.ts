const convertTanggalIso = (dataString: string) => {
  const bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "Novermber",
    "Desember",
  ];
  const [tanggal, time] = dataString.split("T");
  let [y, m, d] = tanggal.split("-");

  return `${d} ${bulan[Number(m) + 0 - 1]} ${y}`;
};
export default convertTanggalIso;
