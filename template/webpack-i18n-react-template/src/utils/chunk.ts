/**
 * @param {Array} array
 * @param {number} [size]
 * @return {Array}
 */
export function chunk<T>(array: T[], size = 1): T[][] {
  if (size < 1) return [];

  const res = [];
  for (let i = 0; i < array.length; i += size) {
    res.push(array.slice(i, i + size));
  }

  return res;
}
