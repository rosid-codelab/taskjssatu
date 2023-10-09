function cetakGenap(jumlah, pesan) {
  if (pesan) {
     console.log("----------");
    console.log(pesan);
     console.log("----------");
  }
  for (let i = 2; i <= jumlah; i += 2) {
    console.log(i);
  }
}

cetakGenap(10, "Menampilkan Angka Bilangan g|Genap");
