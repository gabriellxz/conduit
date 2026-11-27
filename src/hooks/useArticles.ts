import { useQuery } from '@tanstack/react-query'
import { articlesService, type ArticlesResponse } from '../services/articles.service'

export function useArticles() {
  return useQuery<ArticlesResponse>({
    queryKey: ['articles'],
    queryFn: articlesService.listArticles,
  })
}
