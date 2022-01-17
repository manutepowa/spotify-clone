import { Routes, Route } from "react-router-dom"
import Callback from "../../Callback"
import { Home } from "../Content/Home"
import { Library } from "../Content/Library"
import { Search } from "../Content/Search"
import { SearchProvider } from "../Content/Search/context/SearchContext"
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="library" element={<Library />} />
      <Route
        path="search"
        element={
          <SearchProvider>
            <Search />
          </SearchProvider>
        }
      />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  )
}
