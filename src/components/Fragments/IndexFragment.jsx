import React from "react";
import { Card } from "../Elements/Card";
import { Button } from "../Elements/Button";
import { List } from "../Elements/List";

export const IndexFragment = () => {
  return (
    <>
      <div className="row">
        <Card
          icon="bi bi-wallet2"
          title="Pemasukkan"
          total="2.000.000"
          count="50"
        ></Card>
        <Card
          icon="bi bi-cash-stack"
          icon_color="icon-red"
          title="Pengeluaran"
          total="2.000.000"
          count="50"
        ></Card>
      </div>
      <div className="row d-flex justify-content-between">
        <div className="col-md-5 col-lg-6">
          <h4 className="mx-2">Ringkasan Transaksi </h4>
        </div>
        <div className="col-md-6 d-flex flex-row justify-content-between">
          <Button color="blue" icon="bi bi-plus-circle">
            Pemasukan
          </Button>
          <Button color="red" icon="bi bi-dash-circle">
            Pengeluaran
          </Button>
        </div>
      </div>
      <List icon="bi bi-wallet2" date="17 Agustus 2023" total="2.000.000">
        Menerima Gaji
      </List>
      <List
        icon="bi bi-bag-dash"
        icon_color="icon-red"
        date="17 Agustus 2023"
        total="2.000.000"
        text="text-red"
      >
        Membeli Kuota
      </List>
    </>
  );
};
