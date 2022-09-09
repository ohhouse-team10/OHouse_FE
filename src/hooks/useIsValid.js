import {useEffect} from "react";

const useIsValid = (argArray, setIsValidFn, targetFn) => {
  useEffect(() => {
    let count = 0;
    for (let i = 0; i < argArray.length; i++) {
      if (argArray[i] === "") count++;
    }
    if (count === argArray.length) return;

    setIsValidFn(targetFn);
  }, [...argArray]);
};

export default useIsValid;
