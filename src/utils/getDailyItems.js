export function seededShuffle(array, seed) {
  let result = [...array];
  let seedNum = 0;
  for (let i = 0; i < seed.length; i++) {
    seedNum += seed.charCodeAt(i);
  }

  for (let i = result.length - 1; i > 0; i--) {
    seedNum = (seedNum * 9301 + 49297) % 233280;
    const rand = seedNum / 233280;
    const j = Math.floor(rand * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function getDailyItems(array, count = null, tag = "") {
  const today = new Date().toISOString().slice(0, 10);
  const seed = `${today}-${tag}`;
  const shuffled = seededShuffle(array, seed);
  return count ? shuffled.slice(0, count) : shuffled;
}
