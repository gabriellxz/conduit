import ArticleCard from '../components/ArticleCard'
import BadgeTag from '../components/BadgeTag';
import { useGetArticles, useGetTags } from '../hooks/useArticles'
import type { Article } from '../types/article'

export default function Home() {
    const { data: dataArticles } = useGetArticles();
    const { data: dataTags } = useGetTags();

    return (
        <div className='xl:flex xl:justify-center'>
            <div>
                <div className="bg-linear-to-br from-destaque-suave to-transparent to-30% text-texto rounded-4xl p-5">
                    <h1 className="font-display text-3xl">
                        Ideias que merecem tempo de leitura.
                    </h1>
                    <p className="mt-5 text-xl text-texto-sec">
                        Conduit é um espaço para escrever com calma e ler sem ruído. Explore os artigos ou crie uma conta para publicar.
                    </p>
                    <button className="bg-destaque text-destaque-suave rounded-4xl p-2 font-semibold mt-5">Começar a escrever</button>
                </div>
                <div className="mt-12 md:flex md:gap-12 ">
                    <div className='w-full'>
                        <div className='flex border-b-[0.5px] border-texto-sec/20'>
                            <button className="relative px-4 py-3 text-destaque after:absolute after:inset-x-0 after:-bottom-px after:h-1 after:rounded-sm after:bg-destaque after:content-['']">
                                Global
                            </button>

                        </div>

                        <div className="mt-4">
                            {dataArticles?.articles.map((art: Article, index: number) => (
                                <ArticleCard data={art} key={index} />
                            ))}
                        </div>
                    </div>

                    <div className='md:max-w-65 w-full'>
                        <h1 className="font-display text-xl">Tags populares</h1>

                        <div className='text-texto-sec flex gap-2 flex-wrap mt-3'>
                            {dataTags?.tags?.map((tag: string, index: number) => (
                                <BadgeTag tags={tag} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}