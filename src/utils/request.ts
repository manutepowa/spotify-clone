import getToken from "./getToken"
const request = async <TResponse>(
  url: string,
  options: RequestInit = {}
): Promise<TResponse> => {
  try {
    const token = getToken()
    const headers: HeadersInit = {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    }
    const res = await fetch(url, {
      ...options,
      headers,
    })
    const json = await res.json()
    return json
  } catch (e) {
    console.error(e)
    return Promise.reject(e)
  }
}

export default request
