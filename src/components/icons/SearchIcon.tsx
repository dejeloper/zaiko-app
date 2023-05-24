import * as React from "react"
import { SVGProps } from "react"

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="icon icon-tabler icon-tabler-search"
    viewBox="0 0 24 24"
  >
    <path stroke="none" d="M0 0h24v24H0z"></path>
    <path d="M3 10a7 7 0 1014 0 7 7 0 10-14 0M21 21l-6-6"></path>
  </svg>
)
export default SearchIcon
