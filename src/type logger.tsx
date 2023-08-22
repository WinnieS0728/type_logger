import { useMemo } from "react";

export function useTypeLogger<T>(input: T) {
  const type = useMemo(() => {
    return typeof input;
  }, [input]);
  console.log(`${input} is type of ${type}`);
  return type
}
