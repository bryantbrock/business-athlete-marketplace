export const onServer = () => {
  try {
    if (window) {
      return false
    }
  } catch {
    return true
  }
}

export const inProduction = () => {
  try {
    if (process.env.NODE_ENV === 'production') {
      return true
    }
  } catch {
    return false
  }
}