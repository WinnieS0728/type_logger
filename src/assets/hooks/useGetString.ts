export function useGetString(input: number): string | null {
  if (typeof input !== "number") {
    console.error("型別錯誤");
    return null;
  }
  return input.toString();
}
