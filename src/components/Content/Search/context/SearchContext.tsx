import { createContext, FC, useContext, useState } from "react"

interface SearchContextProps {
  term: string;
  setSearchTerm: (newTerm: string) => void;
}

const useSearch = (): SearchContextProps => {
  const [term, setTerm] = useState<string>("")

  const setSearchTerm = (newTerm: string) => {
    setTerm(newTerm)
  }

  return {
    term,
    setSearchTerm,
  }
}

const SearchContext = createContext(null)
const useSearchContext = () => useContext(SearchContext)
const SearchProvider: FC = ({ children }) => {
  const { term, setSearchTerm } = useSearch()

  return (
    <SearchContext.Provider value={{ term, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  )
}

export { SearchProvider, useSearchContext }
export default SearchContext
