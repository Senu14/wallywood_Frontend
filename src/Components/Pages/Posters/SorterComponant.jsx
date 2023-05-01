import React from 'react'

export default function SorterComponant(props) {
  return (
    <select onChange={props.SortHandler} value={props.sort}>
     <option value="?sortkey=price&sortdir=asc">price Asc</option>
     <option value="?sortkey=price&sortdir=desc">price Dec</option>
     <option value="?sortkey=name&sortdir=desc">Title</option>
     </select>
  )
}
