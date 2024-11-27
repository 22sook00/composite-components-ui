export const getIconSize = (size, w, h) => {
  const sizeObj = {
    sm: 16,
    md: 20,
    lg: 24,
  }

  const defaultSize = sizeObj[size] ?? sizeObj['md']
  const width = w ?? defaultSize
  const height = h ?? defaultSize
  return { width, height }
}
