import * as wasm from "../wasm";
import transpose from "./functions/transpose";
import {
  filterDuplicateObjectValues,
  deriveCosineSimilarity,
  getCombination,
  iterateCombination,
} from "./functions/analyze";
const movieData = {
  재석: {
    공조: 5,
    "더 킹": 4,
    라라랜드: 4,
    컨택트: 3,
  },
  명수: {
    공조: 1,
    "더 킹": 0,
    라라랜드: 1,
    "너의 이름은": 4,
  },
  하하: {
    공조: 4,
    "더 킹": 4,
    컨택트: 5,
    "너의 이름은": 3,
  },
  준하: {
    "더 킹": 2,
    라라랜드: 1,
    컨택트: 4,
    "너의 이름은": 3,
  },
  세형: {
    공조: 4,
    라라랜드: 4,
    컨택트: 4,
    "너의 이름은": 2,
  },
  광희: {
    공조: 4,
    "더 킹": 2,
    라라랜드: 3,
    "너의 이름은": 1,
  },
};

export default function () {
  // console.log(wasm.add(1, 2));
  // const { __retain, __allocString, __getString, __getArray } = wasm;
  // const strPtr = __allocString("Hello world");
  // console.log(strPtr);

  // const str = wasm.stringTest(__retain(__allocString("1")));
  // console.log(str);
  // let mvDtPtr = __retain(wasm.__allocArray())
  // console.log(wasm.__getInt16Array(wasm.transpose(movieData)));
  console.log(transpose(movieData));
  console.log(
    iterateCombination(
      getCombination(Object.keys(transpose(movieData))),
      (data: [string, string]) => {
        console.log(data);
        return {
          [data]: deriveCosineSimilarity(
            filterDuplicateObjectValues(transpose(movieData), ...data),
            false
          ),
        };
      }
    )
  );
}
