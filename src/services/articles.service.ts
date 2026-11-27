import { http } from '../lib/http'
import type { Article } from '../types/article'

export interface ArticlesResponse {
  articles: Article[]
  articlesCount: number
}

export const articlesService = {
  listArticles: async (): Promise<ArticlesResponse> => {
    const { data } = await http.get<ArticlesResponse>('/articles')
    console.log(data);
    return data
  },
}