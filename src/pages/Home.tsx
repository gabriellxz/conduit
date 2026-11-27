import ArticleCard from '../components/ArticleCard'
import { useArticles } from '../hooks/useArticles'
import type { Article } from '../types/article'

export default function Home() {
    const { data } = useArticles()

    return (
        <div>
            <div className="bg-linear-to-br from-[#17302A] to-transparent to-30% text-texto rounded-4xl p-5">
                <h1 className="font-display text-3xl">
                    Ideias que merecem tempo de leitura.
                </h1>
                <p className="mt-5 text-xl text-texto-sec">
                    Conduit é um espaço para escrever com calma e ler sem ruído. Explore os artigos ou crie uma conta para publicar.
                </p>
                <button className="bg-destaque text-destaque-suave rounded-4xl p-2 font-semibold mt-5">Começar a escrever</button>
            </div>
            <div className="mt-12">
                <button className="text-destaque text-xl">Global</button>

                <div className="mt-4">
                    {data?.articles.map((art: Article) => (
                        <ArticleCard data={art} key={art.slug} />
                    ))}
                </div>
            </div>
        </div>
    )
}