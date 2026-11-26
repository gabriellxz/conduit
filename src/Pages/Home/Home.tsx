import CardAticle from "../../Components/CardArticle";

export default function Home() {
    return (
        <div>
            <div className="bg-linear-to-br from-[#0B6B57] to-transparent to-30% text-cream rounded-4xl p-5">
                <h1 className="font-display text-3xl">
                    Ideias que merecem tempo de leitura.
                </h1>
                <p className="mt-5 text-xl">
                    Conduit é um espaço para escrever com calma e ler sem ruído. Explore os artigos ou crie uma conta para publicar.
                </p>
                <button className="bg-brand-light text-brand rounded-4xl p-2 font-semibold mt-5">Começar a escrever</button>
            </div>
            <div className="mt-12">
                <button className="text-brand-light text-xl">Global</button>

                <div className="mt-4">
                    <CardAticle />
                </div>
            </div>
        </div>
    )
}