export function filterDuplicateObjectValues(
  originData: Record<string, Record<string, number>>,
  key1: string,
  key2: string
): Record<string, Record<string, number>> {
  const collectedData = { [key1]: {}, [key2]: {} };

  const value1 = originData[key1];
  const value2 = originData[key2];

  Object.keys(value1).forEach((key) => {
    if (value2[key] !== undefined) {
      Object.assign(collectedData[key1], { [key]: value1[key] });
      Object.assign(collectedData[key2], { [key]: value2[key] });
    }
  });

  return collectedData;
}

export function getCombination(array: any[]) {
  const result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      result.push([array[i], array[j]]);
    }
  }
  return result;
}

export function iterateCombination(array: any[], callback: Function) {
  return array.map((value) => {
    return callback(value);
  });
}

export function deriveCosineSimilarity(
  data: Record<string, Record<string, number>>,
  corrected?: boolean
) {
  const [value1, value2] = Object.values(data).map((d) => Object.values(d));

  const [v1Av, v2Av] = [value1, value2].map((v) => {
    let sum = 0;
    v.forEach((d) => {
      sum += d;
    });
    return corrected ? sum / value1.length + 2.5 : 2.5;
  });

  let v1Sq = 0,
    v2Sq = 0,
    simSum = 0;

  value1.forEach((_, index) => {
    const vIndex1 = value1[index];
    const vIndex2 = value2[index];

    simSum += (vIndex1 - v1Av) * (vIndex2 - v2Av);
    v1Sq += Math.pow(vIndex1 - v1Av, 2);
    v2Sq += Math.pow(vIndex2 - v2Av, 2);
  });

  return simSum / (Math.sqrt(v1Sq) * Math.sqrt(v2Sq));
}

export function derivePearsonSimilarity() {}
