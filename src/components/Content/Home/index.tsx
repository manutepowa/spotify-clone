import { memo } from "react"
import { useQuery } from "react-query"
import styled from "styled-components"
import spotifyConfig from "../../../config/spotify.conf"
import request from "../../../utils/request"
import { ContentWrapper, MidTitle } from "../shared/styles"
import { Category } from "./Category"

export interface CategoryItem {
  id: string;
  name: string;
  href: string;
  icons: {
    url: string,
  }[];
}

const fetchHomeData = (): Promise<SpotifyApi.MultipleCategoriesResponse> => {
  const SEARCH_URL = `${spotifyConfig.apiUrl}/browse/categories?limit=50`
  return request(SEARCH_URL)
}

export const Home = memo(() => {
  const { data: homeData, isLoading } = useQuery<CategoryItem[], boolean>(
    "HOME_QUERY",
    fetchHomeData
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Wrapper>
      <MidTitle>Home</MidTitle>

      <CategotyGrid>
        {homeData?.categories?.items?.map((item: CategoryItem) => (
          <Category category={item} />
        ))}
      </CategotyGrid>
    </Wrapper>
  )
})

const Wrapper = styled(ContentWrapper)`
  padding: 16px;
  overflow-y: hidden;
`
const CategotyGrid = styled.div`
  grid-gap: 24px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-auto-rows: auto;
  grid-template-rows: 1fr;
`
