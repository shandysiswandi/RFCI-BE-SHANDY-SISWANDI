const arr = [4, 9, 7, 5, 8, 9, 3];
let cnt = 0;
const panjang = arr.length;

let wow = 0;

function selection(Arr) {
  const length = Arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      const pertama = Arr[i];
      const kedua = Arr[j];

      if (pertama > kedua) {
        Arr[i] = kedua;
        Arr[j] = pertama;
        wow += 1;
        console.log(`${wow}. [${kedua}, ${pertama}] -> ${Arr}`);
      }

      const pertamax = Arr[i - 1];
      const keduax = Arr[j - 1];

      if (pertamax > keduax) {
        Arr[i - 1] = keduax;
        Arr[j - 1] = pertamax;
        wow += 1;
        console.log(`${wow}. [${keduax}, ${pertamax}] -> ${Arr}`);
      }

      i++;
    }
  }

  cnt++;
  if (cnt === panjang) return Arr;
  else selection(Arr);
}

selection(arr);

console.log("\n");

console.log(`Jumlah swap: ${wow}`);
