    const pool = require('../config/database');

    async function getAll() {
        const [rows] = await pool.query(`
            SELECT
                id,
                nama_barang,
                kategori,
                harga,
                kondisi,
                deskripsi,
                lokasi,
                nama_penjual,
                created_at,
                foto IS NOT NULL AS ada_foto
            FROM barang
            ORDER BY created_at DESC
        `);

        return rows;
    }

    async function getById(id) {
    const [rows] = await pool.execute(
    'SELECT * FROM barang WHERE id = ?',
    [id]
    );

    return rows[0];

    }

    async function create(data) {
    const {
    nama_barang,
    kategori,
    harga,
    kondisi,
    deskripsi,
    lokasi,
    nama_penjual,
    foto,
    tipe_foto
    } = data;

    const [result] = await pool.execute(
        `INSERT INTO barang (
            nama_barang,
            kategori,
            harga,
            kondisi,
            deskripsi,
            lokasi,
            nama_penjual,
            foto,
            tipe_foto
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
            nama_barang,
            kategori,
            harga,
            kondisi,
            deskripsi,
            lokasi,
            nama_penjual,
            foto,
            tipe_foto
        ]
    );

    return result.insertId;

    }

    async function update(id, data) {
    const {
    nama_barang,
    kategori,
    harga,
    kondisi,
    deskripsi,
    lokasi,
    nama_penjual,
    foto,
    tipe_foto
    } = data;

    if (foto) {
        await pool.execute(
            `UPDATE barang SET
                nama_barang = ?,
                kategori = ?,
                harga = ?,
                kondisi = ?,
                deskripsi = ?,
                lokasi = ?,
                nama_penjual = ?,
                foto = ?,
                tipe_foto = ?
            WHERE id = ?`,
            [
                nama_barang,
                kategori,
                harga,
                kondisi,
                deskripsi,
                lokasi,
                nama_penjual,
                foto,
                tipe_foto,
                id
            ]
        );
    } else {
        await pool.execute(
            `UPDATE barang SET
                nama_barang = ?,
                kategori = ?,
                harga = ?,
                kondisi = ?,
                deskripsi = ?,
                lokasi = ?,
                nama_penjual = ?
            WHERE id = ?`,
            [
                nama_barang,
                kategori,
                harga,
                kondisi,
                deskripsi,
                lokasi,
                nama_penjual,
                id
            ]
        );
    }

    }

    async function deleteById(id) {
    const [result] = await pool.execute(
    'DELETE FROM barang WHERE id = ?',
    [id]
    );

    return result.affectedRows;

    }

    module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById
    };