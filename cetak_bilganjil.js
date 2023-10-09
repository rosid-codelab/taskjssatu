function cetakGanjil(jumlah, pesan) {
  if (pesan) {
     console.log("----------");
    console.log(pesan);
    console.log("----------");
  }
  for (let i = 1; i <= jumlah; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

cetakGanjil(10, "Menampilkan Angka Bilangan Ganjil");