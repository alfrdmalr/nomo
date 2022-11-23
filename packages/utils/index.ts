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

export const test = [5, 4, 3, 2, 1, 0]

export const hello = "world";  
