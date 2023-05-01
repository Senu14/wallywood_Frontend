import {useState} from "react"
import { ContentWrapper } from "../../App/Elements/ContentWrapper/contentWrapper"
import { PostersStyle } from './Posters.style'
import { PosterNav } from './PosterNav'
import { Outlet } from "react-router-dom"

import { PosterList } from "./PosterList"

export const Posters = () => {
   const [max, setMax] = useState(3800);
   const [min, setMin] = useState(0);

   const maxChangeHandler = (event) => {
     setMax(event.target.value);
   };

   const minChangeHandler = (event) => {
     setMin(event.target.value);
   };
  return (
    <ContentWrapper title="Plakater" description="Se vores udvalg af plakater">
      <PostersStyle>
        <div>
          <PosterNav
            setMax={maxChangeHandler}
            setMin={minChangeHandler}
            min={min}
            max={max}
          />
        </div>
        <div>
          <Outlet context={{ min, max }} />
        </div>
      </PostersStyle>
    </ContentWrapper>
  );
}
