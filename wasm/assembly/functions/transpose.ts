let transposedData: Map<string, Map<string, number>> = new Map();
let k: string;
let key: string;
let data: Map<string, Map<string, number>>;

export default function transpose(
  _data: Map<string, Map<string, number>>
): Map<string, Map<string, number>> {
  data = _data;
  data.keys().forEach((_k) => {
    k = _k;
    // 한번 깟으니까 이건 인간 리스트 나옴
    data
      .get(k)
      .keys()
      .forEach((_key) => {
        key = _key;
        // 또 깟으니까 이건  인간의 영화 리스트 나옴
        let newMap: Map<string, number> = new Map();
        const keyData = transposedData.get(key);
        if (keyData) {
          const newMap: Map<string, number> = keyData;
        }
        newMap.set(k, data.get(k).get(key));
        transposedData.set(key, newMap);
      });
  });
  return transposedData;
}
