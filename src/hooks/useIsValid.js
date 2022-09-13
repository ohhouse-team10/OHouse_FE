import {useEffect} from "react";

const useIsValid = (argArray, setIsValidFn, targetFn) => {
  useEffect(() => {
    let count = 0;
    argArray.forEach((arg) => {
      if (arg === "") count++;
    });
    if (count === argArray.length) return;

    setIsValidFn(targetFn);
  }, [argArray, setIsValidFn, targetFn]);
};

export default useIsValid;
