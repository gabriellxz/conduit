import { MdOutlineWbSunny } from "react-icons/md"

export default function Header() {

    return (
        <header className="text-cream sm:flex md:justify-around sm:justify-between items-center p-5 fixed w-full">
            <p className="text-3xl font-display text-cream">conduit<span className="text-brand-ligth">.</span></p>
            <div className="flex items-center gap-5 flex-wrap">
                <button className="bg-brand text-brand-ligth rounded-4xl p-2">
                    Início
                </button>
                <button>Entrar</button>
                <button className="bg-brand-ligth text-brand rounded-4xl p-2">Criar conta</button>
                <MdOutlineWbSunny />
            </div>
        </header>
    )
}