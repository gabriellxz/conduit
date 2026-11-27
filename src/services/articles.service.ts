import { http } from '../lib/http'
import type { Article } from '../types/article'

export interface ArticlesResponse {
    articles: Article[];
    articlesCount: number;
}

export interface TagsResponse {
    tags: string[];
}

export const articlesService = {
    listArticles: async (): Promise<ArticlesResponse> => {
        const { data } = await http.get<ArticlesResponse>('/articles')
        return data;
    },

    listTags: async (): Promise<TagsResponse> => {
        const { data } = await http.get<TagsResponse>('/tags')
        return data;
    }
}
