import Height from "@/componen/Height";
import React, { FormEvent, useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { Cropper } from "react-cropper";
import "cropperjs/dist/cropper.css";
import Editor from 'react-simple-wysiwyg';
import axiosAdmin from "@/utils/axiosAdmin";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import loadingModal from "@/state/loadingModal";
const TambahArtikel: React.FC = () => {
    const route = useRouter();

    const [validated, setValidated] = useState(false);
    const [html, setHtml] = useState('');
    const [judul, setJudul] = useState('');

    const [src, setSrc] = useState<any>();
    const [width, setWidth] = useState<any>();
    const [height, setHeight] = useState<any>();
    const [x, setX] = useState<any>();
    const [img, setImg] = useState<any>();
    const [y, setY] = useState<any>();

    function onChange(e: any) {
        setHtml(e.target.value);
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        const formdata = new FormData();
        formdata.append('judul', judul);
        formdata.append('isi', html);

        formdata.append('foto', img);
        formdata.append('width', width);
        formdata.append('height', height);
        formdata.append('x', x);
        formdata.append('y', y);
        if (form.checkValidity() !== false) {

            event.stopPropagation();
            axiosAdmin.post('artikel', formdata, {
                headers: {
                    'Content-Type': "multipart/form-data"
                }
            }).then((respon: AxiosResponse<any, any>) => {
                if (respon.data.status == "success") {
                    alert('Artikel Berhasil disimpan')
                    route.back();
                }
            })
        }


        setValidated(true);
    };

    return (<>
        <div>

            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Tambah Artikel</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Tambah Artikel</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content p-3">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                    <Row className="mb-12">
                                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <Form.Label>Judul Artikel</Form.Label>
                                            <Form.Control
                                                required
                                                onChange={(e) => setJudul(e.target.value)}
                                                type="text"
                                                placeholder="masukkan judul artike anda"

                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <Form.Label>Deskripsi</Form.Label>
                                            <Editor aria-required style={{ height: "230px" }} value={html} onChange={onChange} />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" controlId="validationCustom01">
                                            <Form.Label>Foto Produk</Form.Label>
                                            <Form.Control

                                                onChange={(e: any) => {

                                                    e.preventDefault();
                                                    let files;
                                                    if (e.target) {
                                                        files = e.target.files;
                                                    }
                                                    const reader = new FileReader();
                                                    reader.onload = () => {
                                                        setSrc(reader.result);
                                                    }

                                                    reader.readAsDataURL(files[0]);
                                                    setImg(files[0]);
                                                    // setCrop(true);
                                                }}
                                                accept="image/png, image/gif, image/jpeg"
                                                required
                                                type="file"
                                                placeholder="First name"
                                            />
                                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                        </Form.Group>

                                    </Row>
                                    <Height height={20} />
                                    <button className="btn btn-danger">Simpan Data</button>
                                </Form>

                            </div>
                            <div className="col-6">
                                <Cropper
                                    style={{ height: 400, width: "100%" }}
                                    // zoomTo={0.5}
                                    // initialAspectRatio={1}
                                    // preview=".img-preview"
                                    src={src}
                                    modal={true}
                                    viewMode={1}
                                    aspectRatio={4 / 3}
                                    minCropBoxHeight={10}
                                    minCropBoxWidth={10}
                                    background={false}
                                    responsive={true}
                                    autoCropArea={1}
                                    crop={(event: any) => {
                                        setWidth(event.detail.width.toFixed(2));
                                        setHeight(event.detail.height.toFixed(2));
                                        setY(event.detail.y.toFixed(2));
                                        setX(event.detail.x.toFixed(2));
                                    }}
                                    checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                                    onInitialized={(instance) => {
                                        // setCropper(instance);
                                    }}
                                    guides={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>);
}

export default TambahArtikel;