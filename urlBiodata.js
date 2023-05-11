var express = require("express");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/biodata", function (req, res) {
  const nama = req.query.nama;
  const tempatLahir = req.query.tempatLahir;
  const tanggalLahir = req.query.tanggalLahir;
  const alamat = req.query.alamat;

  res.send({
    nama: nama,
    tampatLahir: tempatLahir,
    tanggalLahir: tanggalLahir,
    alamat: alamat,
  });
});

app.post("/biodata", function (req, res) {
  const nama = req.body.nama;
  const tempatLahir = req.body.tempatLahir;
  const tanggalLahir = req.body.tanggalLahir;
  const alamat = req.body.alamat;

  res.send(
    JSON.stringify({
      nama: nama,
      tampatLahir: tempatLahir,
      tanggalLahir: tanggalLahir,
      alamat: alamat,
    })
  );
});

app.listen(3000, function () {
  console.log("Server Running in port 3000");
});
