<?php
// Ambil data JSON yang dikirim melalui fetch
$data = json_decode(file_get_contents('php://input'), true);

if (empty($data)) {
    echo "Keranjang belanja kosong!";
    exit;
}

// Simpan data pesanan ke file txt (untuk penyimpanan sederhana)
$file = fopen("pesanan.txt", "a");
fwrite($file, "Pesanan Baru:\n");
foreach ($data as $item) {
    fwrite($file, "Produk: " . $item['product'] . " - Harga: Rp. " . $item['price'] . "\n");
}
fwrite($file, "\n");
fclose($file);

echo "Pesanan berhasil diproses!";
?>