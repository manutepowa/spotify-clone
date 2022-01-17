import { useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"
import useLocalStorage from "./hooks/useLocalStorage"
import qs from "query-string"

export const parseAccessToken = (hash: string): string => {
  const parsed = qs.parse(hash)

  return parsed.access_token as string
}
const Callback = () => {
  const location = useLocation()
  const [token, setToken] = useLocalStorage("token", "")
  
  useEffect(() => {
    const accessToken = parseAccessToken(location.hash)
    if (accessToken) {
      setToken(accessToken)
    }
  }, [location, setToken])
  
  if (token) {
    return <Navigate to="/" />
  }
  return <div />
}

export default Callback
