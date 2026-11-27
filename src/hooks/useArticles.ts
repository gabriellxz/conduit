import { useQuery } from '@tanstack/react-query'
import { articlesService, type ArticlesResponse, type TagsResponse } from '../services/articles.service'

export function useGetArticles() {
  return useQuery<ArticlesResponse>({
    queryKey: ['articles'],
    queryFn: articlesService.listArticles,
  })
}

export function useGetTags() {
    return useQuery<TagsResponse>({
        queryKey: ['tags'],
        queryFn: articlesService.listTags
    })
}