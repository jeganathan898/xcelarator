export const getPathname = (path: string, index: number): string => {
  return path.split("/")[index]
}
