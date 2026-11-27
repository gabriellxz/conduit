import { MdOutlineWbSunny } from "react-icons/md"
import { useTheme } from "../hooks/useTheme"
import { IoMoonOutline } from "react-icons/io5";

export default function Header() {

    const { theme, toggle } = useTheme();
    const isDark = theme === "dark"

    return (
        <header className="text-texto sm:flex md:justify-around sm:justify-between items-center p-5 fixed w-full bg-fundo border-b-[0.5px] border-texto-sec/20 z-10">
            <p className="text-3xl font-display">conduit<span className="text-destaque">.</span></p>
            <div className="flex items-center gap-5 flex-wrap font-semibold">
                <button className="bg-destaque-suave text-destaque rounded-4xl p-2">
                    Início
                </button>
                <button className="rounded-4xl p-2">Entrar</button>
                <button className="bg-destaque text-destaque-suave rounded-4xl p-2">Criar conta</button>
                <button onClick={toggle}>
                    {isDark ? <MdOutlineWbSunny /> : <IoMoonOutline />}
                </button>
            </div>
        </header>
    )
}
