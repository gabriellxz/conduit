import { MdOutlineWbSunny } from "react-icons/md"

export default function Header() {
    return (
        <header className="text-texto sm:flex md:justify-around sm:justify-between items-center p-5 fixed w-full bg-fundo">
            <p className="text-3xl font-display">conduit<span className="text-destaque">.</span></p>
            <div className="flex items-center gap-5 flex-wrap font-semibold">
                <button className="bg-destaque-suave text-destaque rounded-4xl p-2">
                    Início
                </button>
                <button className="rounded-4xl p-2">Entrar</button>
                <button className="bg-destaque text-destaque-suave rounded-4xl p-2">Criar conta</button>
                <MdOutlineWbSunny />
            </div>
        </header>
    )
}
