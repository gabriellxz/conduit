import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

export default function CardAticle() {
    return (
        <div className="text-cream">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <FaRegUser size={30} />
                    <div>
                        <p>Marina</p>
                        <p className="text-sm text-zinc-400">24 de nov. de 2026</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border border-brand-light rounded-4xl p-2 text-brand-light">
                    <CiHeart />
                    <span>2</span>
                </div>
            </div>

            <h1 className="font-display text-2xl">
                Ideias que merecem tempo de leitura.
            </h1>
            <p className="mt-2 text-sm">
                Conduit é um espaço para escrever com calma e ler sem ruído. Explore os artigos ou crie uma conta para publicar.
            </p>
        </div>
    )
}