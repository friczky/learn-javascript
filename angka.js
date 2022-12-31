function angkaKeTeks(angka) {
    // daftar nama untuk angka-angka dari 0 hingga 19
    const namaAngka = [
        "nol",
        "satu",
        "dua",
        "tiga",
        "empat",
        "lima",
        "enam",
        "tujuh",
        "delapan",
        "sembilan",
        "sepuluh",
        "sebelas",
        "dua belas",
        "tiga belas",
        "empat belas",
        "lima belas",
        "enam belas",
        "tujuh belas",
        "delapan belas",
        "sembilan belas"
    ];

    // daftar nama untuk angka-angka dari 20 hingga 90 dalam skala puluhan
    const namaAngkaPuluhan = [
        "dua puluh",
        "tiga puluh",
        "empat puluh",
        "lima puluh",
        "enam puluh",
        "tujuh puluh",
        "delapan puluh",
        "sembilan puluh"
    ];

    const namaAngkaRatusanRibu = [ "seratus","dua ratus","tiga ratus","empat ratus","lima ratus","enam ratus","tujuh ratus","delapan ratus","sembilan ratus"];

    // jika angka adalah nol atau lebih kecil dari 20, kembalikan nama angka dari
    // daftar namaAngka
    if (angka === 0 || angka <= 19) {
        return namaAngka[angka];
    }

    // jika angka adalah lebih dari 20, pisahkan angka menjadi triliun, milyar,
    // jutaan, ribuan, ratusan, puluhan, dan satuan
    let triliun = Math.floor(angka / 1000000000000);
    let sisa = angka % 1000000000000;
    let milyar = Math.floor(sisa / 1000000000);
    sisa = sisa % 1000000000;
    let jutaan = Math.floor(sisa / 1000000);
    sisa = sisa % 1000000;
    let ratusan_ribu = Math.floor( sisa / 100000);
    sisa = sisa % 100000;
    let puluhan_ribu = Math.floor( sisa / 10000);
    sisa = sisa % 10000;
    let ribuan = Math.floor(sisa / 1000);
    sisa = sisa % 1000;
    let ratusan = Math.floor(sisa / 100);
    sisa = sisa % 100;/*  */
    let puluhan = Math.floor(sisa / 10);
    let satuan = sisa % 10;

    // ubah triliun, milyar, jutaan, ribuan, ratusan, puluhan, dan satuan menjadi
    // teks
    let teksTriliun = namaAngka[triliun] + " triliun";
    let teksMilyar = namaAngka[milyar] + " milyar";
    let teksRatusanRibu = namaAngkaRatusanRibu[ratusan_ribu - 1] + " ";
    let teksPuluhanRibu = namaAngkaPuluhan[puluhan_ribu - 2] + " ";
    let teksJutaan = namaAngka[jutaan] + " juta";
    let teksRibuan = namaAngka[ribuan] + "";
    let teksRatusan = namaAngka[ratusan] + " ratus";
    let teksPuluhan = namaAngkaPuluhan[puluhan - 2];
    let teksSatuan = namaAngka[satuan];

    // gabungkan triliun, milyar, jutaan, ribuan, ratusan, puluhan, dan satuan
    // menjadi satu string
    let hasil = "";
    if (triliun > 0) {
        hasil += teksTriliun;
    }
    if (milyar > 0) {
        hasil += (
            hasil
                ? " "
                : ""
        ) + teksMilyar;
    }
    if (jutaan > 0) {
        hasil += (
            hasil
                ? " "
                : ""
        ) + teksJutaan;
    }
    if (ratusan_ribu > 0) {
        hasil += ( hasil ? " " : "" ) + teksRatusanRibu + "ribu";
    }
    if (puluhan_ribu > 0) {
        hasil += ( hasil ? " " : "" ) + teksPuluhanRibu + "";
    }
    if (ribuan > 0) {
        hasil += (
            hasil
                ? " "
                : ""
        ) + teksRibuan + " ribu";
    }
    if (ratusan > 0) {
        hasil += (
            hasil
                ? " "
                : ""
        ) + teksRatusan;
    }
    if (puluhan > 0) {
        hasil += (
            hasil
                ? " "
                : ""
        ) + teksPuluhan + "";
    }
    if (satuan > 0) {
        hasil += (
            hasil
                ? " "
                : ""
        ) + teksSatuan;
    }

    return hasil + " rupiah";
}

// contoh penggunaan function angkaKeTeks
console.log(angkaKeTeks(2520000)); // menampilkan "satu juta seratus lima puluh rupiah"