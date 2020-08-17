export default function transpose(
  data: Record<string, Record<string, number>>
): Record<string, Record<string, number>> {
  const transposedData: Record<string, Record<string, number>> = {};
  Object.keys(data).forEach((k) => {
    Object.keys(data[k]).forEach((key) => {
      if (!transposedData[key]) {
        Object.assign(transposedData, { [key]: { [k]: data[k][key] } });
      } else {
        Object.assign(transposedData[key], { [k]: data[k][key] });
      }
    });
  });
  return transposedData;
}
