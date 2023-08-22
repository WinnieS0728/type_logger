export function useGetNumber(input: string): number | null {
  if (typeof input !== "string") {
    console.error("型別錯誤");
    return null;
  }
  return parseInt(input);
}
