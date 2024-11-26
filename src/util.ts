export function dropWhile<T>(xs: T[], pred: (elem: T, idx: number) => boolean) {
  const n = xs.length;
  let i = 0;

  while (i < n && pred(xs[i], i)) {
    i++;
  }

  return xs.slice(i);
}
