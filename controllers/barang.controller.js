const Barang = require('../models/barang.model');

exports.getDaftarBarang = async (req, res) => {
    try {
        const daftarBarang = await Barang.getAll();

        res.render('pages/barang-list', {
            judul: 'GienMarketplace',
            daftarBarang
        });
    } catch (error) {
        console.error('[ERROR getDaftarBarang]:', error.message);
        res.status(500).send('Gagal menampilkan daftar barang.');
    }
};

exports.getFormTambah = (req, res) => {
    res.render('pages/barang-form', {
        judul: 'Jual Barang',
        barang: null,
        mode: 'tambah'
    });
};

exports.postTambahBarang = async (req, res) => {
    try {
        const data = {
            nama_barang: req.body.nama_barang,
            kategori: req.body.kategori,
            harga: req.body.harga,
            kondisi: req.body.kondisi,
            deskripsi: req.body.deskripsi,
            lokasi: req.body.lokasi,
            nama_penjual: req.body.nama_penjual,
            foto: req.file ? req.file.buffer : null,
            tipe_foto: req.file ? req.file.mimetype : null
        };

        await Barang.create(data);

        res.redirect('/');
    } catch (error) {
        console.error('[ERROR postTambahBarang]:', error.message);
        res.status(500).send('Gagal menambahkan barang.');
    }
};

exports.getFormEdit = async (req, res) => {
    try {
        const barang = await Barang.getById(req.params.id);

        if (!barang) {
            return res.status(404).send('Barang tidak ditemukan.');
        }

        res.render('pages/barang-form', {
            judul: 'Edit Barang',
            barang,
            mode: 'edit'
        });
    } catch (error) {
        console.error('[ERROR getFormEdit]:', error.message);
        res.status(500).send('Gagal menampilkan formulir edit.');
    }
};

exports.postEditBarang = async (req, res) => {
    try {
        const data = {
            nama_barang: req.body.nama_barang,
            kategori: req.body.kategori,
            harga: req.body.harga,
            kondisi: req.body.kondisi,
            deskripsi: req.body.deskripsi,
            lokasi: req.body.lokasi,
            nama_penjual: req.body.nama_penjual,
            foto: req.file ? req.file.buffer : null,
            tipe_foto: req.file ? req.file.mimetype : null
        };

        await Barang.update(req.params.id, data);

        res.redirect('/');
    } catch (error) {
        console.error('[ERROR postEditBarang]:', error.message);
        res.status(500).send('Gagal memperbarui barang.');
    }
};

exports.postHapusBarang = async (req, res) => {
    try {
        await Barang.deleteById(req.params.id);

        res.redirect('/');
    } catch (error) {
        console.error('[ERROR postHapusBarang]:', error.message);
        res.status(500).send('Gagal menghapus barang.');
    }
};