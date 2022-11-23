// randomly sorts the given array and returns a new array with the result
// shuffles using Fisher-Yates method
export function shuffle<T>(array: T[]) {
  let arr = array.slice();
  let currentIndex = arr.length;
  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // here we swap the two elements in place
    [arr[currentIndex], arr[randomIndex]] = [
      arr[randomIndex],
      arr[currentIndex],
    ];
  }
  return arr;
}
