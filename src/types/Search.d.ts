export interface Sick {
  sickCd: string,
  sickNm: string
}

export type SearchState = {
  keyword: string
  isSearchResultBoxOpen: boolean
  recentKeywordList: string[]
  recommendedKeywordList: Sick[]
}