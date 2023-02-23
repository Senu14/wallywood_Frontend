import { ContentWrapper } from "../../App/Elements/ContentWrapper/contentWrapper"
import { PostersStyle } from './Posters.style'
import { PosterNav } from './PosterNav'
import { Outlet } from "react-router-dom"

import { PosterList } from "./PosterList"

export const Posters = () => {
  return (
    <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
      <PostersStyle>
        <div><PosterNav /></div>
        <div>
          <Outlet />
        </div>
      </PostersStyle>
    </ContentWrapper>
  )
}
