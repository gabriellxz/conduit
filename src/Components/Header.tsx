import { MdOutlineWbSunny } from "react-icons/md"

export default function Header() {

    return (
        <header className="text-cream sm:flex md:justify-around sm:justify-between items-center p-5 fixed w-full bg-dark border-b-[0.5px] border-cream">
            <p className="text-3xl font-display text-cream">conduit<span className="text-brand-light">.</span></p>
            <div className="flex items-center gap-5 flex-wrap font-semibold">
                <button className="bg-brand text-brand-light rounded-4xl p-2">
                    Início
                </button>
                <button>Entrar</button>
                <button className="bg-brand-light text-brand rounded-4xl p-2">Criar conta</button>
                <MdOutlineWbSunny />
            </div>
        </header>
    )
}
