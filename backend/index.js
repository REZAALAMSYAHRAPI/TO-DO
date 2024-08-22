const express = require('express');
const mysql = require('mysql2');

const app = express();

// Middleware
app.use(express.json());

// Koneksi ke database MySQL
const db = mysql.createConnection({
  host: '192.168.10.88',
  user: 'backup',
  password: 'backup', // Ganti dengan password MySQL Anda
  database: 'sikbaru' // Ganti dengan nama database Anda
});

// Koneksi ke database
db.connect(err => {
  if (err) {
    console.error('Gagal terhubung ke database: ', err);
    return;
  }
  console.log('Terhubung ke database MySQL');
});

// Route GET untuk mengambil data dari tabel 'users'
app.get('/users', (req, res) => {
  const query = 'SELECT * FROM bangsal'; // Pastikan 'users' adalah nama tabel yang benar

  db.query(query, (err, results) => {
    if (err) {
      console.error('Gagal mengambil data: ', err);
      res.status(500).json({ error: 'Gagal mengambil data' });
      return;
    }
    res.json(results);
  });
});

// Mulai server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
