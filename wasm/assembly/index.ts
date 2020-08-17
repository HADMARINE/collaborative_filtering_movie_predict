import _transpose from "./functions/transpose";

// export { memory };

export function transpose(
  data: Map<string, Map<string, number>>
): Map<string, Map<string, number>> {
  return _transpose(data);
}

export function stringTest(data: string): string {
  return data;
}

// export namespace computes {}
