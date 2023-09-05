export interface Sick {
  sickCd: string,
  sickNm: string
}

export type SearchState = {
  isSearchResultBoxOpen: boolean
  recentKeywordList: string[]
  relatedKeywordList: Sick[]
}