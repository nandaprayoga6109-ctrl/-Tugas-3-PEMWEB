require('dotenv').config();

const express = require('express');
const path = require('path');
const pool = require('./config/database');
const barangRoutes = require('./routes/barang.routes');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', barangRoutes);

async function startServer() {
    try {
        const connection = await pool.getConnection();

        console.log('[DATABASE] Berhasil terhubung ke MySQL Pool.');

        connection.release();

        app.listen(PORT, () => {
            console.log(
                `[SERVER] GienMarketplace aktif di http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(
            '[DATABASE] Gagal terhubung ke MySQL:',
            error.message
        );

        process.exit(1);
    }
}
startServer();