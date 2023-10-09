function adalahBilanganPrima(angka) {
  if (angka <= 1) {
    return false;
  } else if (angka <= 3) {
    return true;
  } else if (angka % 2 === 0 || angka % 3 === 0) {
    return false;
  }
  
  let i = 5;
  while (i * i <= angka) {
    if (angka % i === 0 || angka % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  
  return true;
}

const input = 10;
const output = adalahBilanganPrima(input);

console.log(output); // Output akan berupa 'false' karena bilangan 10 bukanlah bilangan prima.
