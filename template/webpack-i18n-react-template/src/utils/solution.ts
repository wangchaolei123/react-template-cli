export function solution(n: number, k: number, r = false) {
  if (n === 1) return r ? 'b' : 'r';
  const len = 1 << (n - 1);
  if (k >= len / 2) {
    return solution(n - 1, k - len / 2, r);
  }
  return solution(n - 1, k, !r);
}

export const obj = new Proxy(
  { value: 0 },
  {
    get(target, p, receiver) {
      if (typeof p === 'symbol') {
        return () => {
          return target.value;
        };
      }
      target.value += +p;
      return receiver;
    },
  },
);
