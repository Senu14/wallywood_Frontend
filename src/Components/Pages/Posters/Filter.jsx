import React from "react";
import { FilterStyle } from "./Filter.style";

function Filter({ minValue, maxValue, setMax, setMin }) {
  return (
    <FilterStyle>
      <input
        value={minValue}
        onChange={setMin}
        defaultValue={0}
        type="number"
        min={0}
        max={3800}
      />
      -
      <input
        value={maxValue}
        onChange={setMax}
        defaultValue={3800}
        type="number"
        min={31}
        max={3800}
      />
    </FilterStyle>
  );
}

export default Filter;
