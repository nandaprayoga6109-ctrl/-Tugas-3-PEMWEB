const express = require('express');
const multer = require('multer');

const router = express.Router();
const barangController = require('../controllers/barang.controller');

const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 2 * 1024 * 1024 
    },
    fileFilter: (req, file, cb) => {
        const tipeDiizinkan = [
            'image/jpeg',
            'image/png',
            'image/webp'
        ];

        if (tipeDiizinkan.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Foto harus berformat JPG, PNG, atau WEBP.'));
        }
    }
});

router.get('/', barangController.getDaftarBarang);
router.get('/barang/foto/:id', async (req, res) => {
    try {
        const Barang = require('../models/barang.model');
        const barang = await Barang.getById(req.params.id);

        if (!barang || !barang.foto) {
            return res.status(404).send('Foto tidak ditemukan.');
        }

        res.setHeader('Content-Type', barang.tipe_foto);
        res.setHeader('Cache-Control', 'public, max-age=86400');

        res.send(barang.foto);
    } catch (error) {
        console.error('[ERROR menampilkan foto]:', error.message);
        res.status(500).send('Gagal menampilkan foto.');
    }
});
router.get('/barang/tambah', barangController.getFormTambah);

router.post(
    '/barang/tambah',
    upload.single('foto'),
    barangController.postTambahBarang
);

router.get('/barang/edit/:id', barangController.getFormEdit);

router.post(
    '/barang/edit/:id',
    upload.single('foto'),
    barangController.postEditBarang
);

router.post('/barang/hapus/:id', barangController.postHapusBarang);

router.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).send('Ukuran foto maksimal 2 MB.');
        }

        return res.status(400).send('Terjadi kesalahan saat mengunggah foto.');
    }

    if (err) {
        return res.status(400).send(err.message);
    }

    next();
});

module.exports = router;