import React from "react"
const Kosong: React.FC = () => {
    return (<>
        <div style={{ textAlign: "center" }}>
            <img style={{ width: "30%" }} src={"/no_data.png"} />
            <div style={{ fontWeight: "bold" }}>Data tidak tersedia</div>
            <div style={{ opacity: "0.5" }}>untuk saat data penjahit masih kosong</div>
        </div>
    </>);
}

export default Kosong;