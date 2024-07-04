import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Design Web Panti Asuhan",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Design Web Panti Asuhan",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Design Web Panti Asuhan",
      description: "Design & Development",
      imgUrl: projImg1,
    }
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>TUGAS</h2>
                  <p>BERIKUT IALAH BEBERAPA TUGAS YANG TELAH SAYA BUAT</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
      <p>Menyimpan Data ke Database dengan AJAX Untuk lebih memperjelas pemahaman
      anda bagaimana cara menyimpan data ke database dengan AJAX, anda akan
      diajak untuk berlatih. Pada latihan ini anda akan membuat sebuah form
      simpan satuan dan menyimpan data yang diinput oleh user dengan menggunakan
      Ajax. Pada contoh ini saya asumsikan anda memiliki sebuah tabel pada
      database anda dengan nama satuan dan dengan struktur seperti berikut.DB =
      cafe_anisya Langkah I. Membuat File Koneksi Simpan dengan nama koneksi.php
      Langkah II. Membuat HTML Form Pertama buatlah sebuah document baru dengan
      text editor anda, dan buat sebuah HTML form dengan script di bawah. Simpan
      dengan nama file satuan.php di direktory web server anda. Script di atas
      untuk membentuk sebuah form seperti berikut. Langkah III. Membuat File
      Javascript untuk Membentuk XMLHttpRequest Langkah selanjutnya adalah
      membuat JavaScript untuk membentuk XMLHttpRequest dan membuat function
      untuk mengirim data ke server. Buat kembali document baru dengan text
      editor anda dan ketik script berikut : Kemudian simpan dengan nama ajax.js
      di directory yang sama dengan file satuan.php yang dibuat sebelumnya.
      Langkah IV. Membuat handlePage dan Menyimpan Data Setelah selesai dengan
      langkah I dan II, selanjutnya adalah membuat handlePage untuk menangani
      data yang dikirim dan menyimpan data yang dikirim ke database. Perlu anda
      ingat, walaupun sebelum data dikirim telah divalidasi dengan javascript
      anda harus kembali melakukan validasi setelah data sampai di server dengan
      server side scripting seperti PHP. Ingat jangan pernah percaya kepada user
      anda dan jangan pernah percaya dengan apa yang diinputkan oleh user serta
      jangan percaya dengan apa yang dikirim oleh web browser anda. Sekarang
      buatlah sebuah document baru dengan text editor dan ketikkan script
      berikut.\ setelah selesai simpan dengan nama save_data.php di directory
      yang sama dengan file satuan.php. Langkah V. Finishing Setelah selesai
      membuat ketiga file di atas, sekarang buka kembali file contact.php dan
      edit pada bagian yang diberi warna biru seperti berikut :</p>
      <input type="button" name="Button" value="Save" />
      menjadi
      <script type="text/javascript" src="ajax.js"></script>
      <input
        type="button"
        name="Button"
        value="Save"
        onclick="sendData('save_data.php','content'); return false;"
      />
      LATIHAN Silahkan anda buat program ajax untuk menyimpan data ke tabel
      berikut.
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      </Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
