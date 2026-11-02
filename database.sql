CREATE DATABASE IF NOT EXISTS gien_marketplace;

USE gien_marketplace;

CREATE TABLE IF NOT EXISTS barang (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nama_barang VARCHAR(150) NOT NULL,
    kategori ENUM(
        'Kendaraan',
        'Barang Elektronik',
        'Peralatan Rumah'
    ) NOT NULL,
    harga DECIMAL(15, 2) NOT NULL,
    kondisi ENUM('Baru', 'Bekas') NOT NULL,
    deskripsi TEXT NOT NULL,
    lokasi VARCHAR(150) NOT NULL,
    nama_penjual VARCHAR(100) NOT NULL,
    foto LONGBLOB,
    tipe_foto VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO barang (
    nama_barang,
    kategori,
    harga,
    kondisi,
    deskripsi,
    lokasi,
    nama_penjual
) VALUES
(
    'Honda Vario 160',
    'Kendaraan',
    22000000,
    'Bekas',
    'Motor dalam kondisi baik dan terawat.',
    'Denpasar, Bali',
    'Made'
),
(
    'Laptop ASUS VivoBook',
    'Barang Elektronik',
    6500000,
    'Bekas',
    'Laptop cocok untuk kuliah dan pekerjaan.',
    'Badung, Bali',
    'Komang'
),
(
    'Meja Belajar Minimalis',
    'Peralatan Rumah',
    450000,
    'Baru',
    'Meja belajar minimalis untuk kamar.',
    'Denpasar, Bali',
    'Putu'
);