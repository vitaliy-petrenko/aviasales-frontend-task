export const fetchJSON = async (path: string) => {
  const response = await fetch(path)

  if (response.ok) {
    return response.json()
  } else {
    const
      status = response.status,
      text = await response.text()

    return Promise.reject(`${status}: ${text}`)
  }
}
