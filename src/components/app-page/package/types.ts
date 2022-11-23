type SizeObject = {
  span: number
  offset: number
}

export interface ColProps {
  span?: number
  offset?: number
  pull?: number
  push?: number
  xs?: number | SizeObject
  sm?: number | SizeObject
  md?: number | SizeObject
  lg?: number | SizeObject
  xl?: number | SizeObject
}
