import React from "react";

const Pengaturan: React.FC = () => {
    return (<>
        <div>

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Pengaturan</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Pengaturan</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content">
            </section>
        </div>
    </>);
}

export default Pengaturan;