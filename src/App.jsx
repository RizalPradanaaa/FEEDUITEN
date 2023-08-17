import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="mt-3">FEEDUITEN APPS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <h2 className="mt-3">Rp. 1.500.000,-</h2>
          <p>Sisa uang kamu tersisa 75% lagi</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <i className="bi bi-wallet2 icon"></i>
            <p className="my-1">Pemasukkan</p>
            <h3>Rp. 2.000.000,-</h3>
            <p className="mb-1">
              <i className="fw-bold ">50</i> Transaksi
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <i className="bi bi-cash-stack icon icon-red"></i>
            <p className="my-1">Pengeluaran</p>
            <h3>Rp. 2.000.000,-</h3>
            <p className="mb-1">
              <i className="fw-bold">50</i> Transaksi
            </p>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-5 col-lg-6">
          <h4 className="mx-2">Ringkasan Transaksi </h4>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-between">
          <button className="blue mx-2">
            Pemasukan <i class="bi bi-plus-circle"></i>
          </button>
          <button className="red mx-2">
            Pengeluaran <i class="bi bi-dash-circle"></i>
          </button>
        </div>
      </div>
      <div className="row d-flex my-3 align-items-center">
        <div className="col-8 col-md-6 d-flex ">
          <i class="bi bi-wallet2 icon icon2 mx-2"></i>
          <div className="d-flex flex-column mx-3">
            <h5>Menerima Gaji</h5>
            <p>17 Agustus 2023</p>
          </div>
        </div>
        <div className="col-4 col-md-6 d-flex justify-content-end">
          <b className="mx-2">Rp. 2.000.000,-</b>
        </div>
      </div>
      <div className="row d-flex my-3 align-items-center">
        <div className="col-8 col-md-6 d-flex ">
          <i class="bi bi-bag-dash icon icon2 icon-red mx-2"></i>
          <div className="d-flex flex-column mx-3">
            <h5>Membeli Kuota</h5>
            <p>17 Agustus 2023</p>
          </div>
        </div>
        <div className="col-4 col-md-6 d-flex justify-content-end">
          <b className="mx-2 text-red">Rp. 2.000.000,-</b>
        </div>
      </div>
    </div>
  );
}

export default App;
