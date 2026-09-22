// personal budget calculator

// memasukkan pendapatan
let pendapatan = Number(prompt("Masukkan total pendapatan: "));

let totalPengeluaran = 0;
let i = 0;
let lanjut = "ya";

// perulangan untuk memasukkan pengeluaran
while (lanjut.toLowerCase() === "ya") {
    i++;

    let kategori = prompt("Masukkan kategori pengeluaran ke-" + i + ": ");
    let jumlah = Number(prompt("Masukkan jumlah pengeluaran " + kategori + ": "));

    totalPengeluaran += jumlah;

    console.log("Pengeluaran " + i + ": " + kategori + " = Rp " + jumlah);

    lanjut = prompt("Tambah pengeluaran lagi? (ya/tidak): ");
}

// menghitung sisa saldo
let saldo = pendapatan - totalPengeluaran;

// menghitung persentase saldo
let persentaseSaldo = (saldo / pendapatan) * 100;

// menentukan kondisi keuangan
let kondisi;

if (persentaseSaldo >= 30) {
    kondisi = "Baik";
} else if (persentaseSaldo >= 10) {
    kondisi = "Perlu Perhatian";
} else {
    kondisi = "Kritis";
}

// Mmlog(" RINGKASAN ANGGARAN ");
console.log("Total Pendapatan  : Rp " + pendapatan.toLocaleString("id-ID"));
console.log("Total Pengeluaran : Rp " + totalPengeluaran.toLocaleString("id-ID"));
console.log("Sisa Saldo        : Rp " + saldo.toLocaleString("id-ID"));
console.log("Persentase Saldo  : " + persentaseSaldo.toFixed(2) + "%");
console.log("Kondisi Keuangan  : " + kondisi);
