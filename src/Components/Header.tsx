import { MdOutlineWbSunny } from "react-icons/md"

export default function Header() {

    return (
        <header className="text-cream flex justify-around items-center p-3">
            <p className="text-3xl font-display text-cream">conduit<span className="text-brand-ligth">.</span></p>
            <div className="flex gap-5">
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