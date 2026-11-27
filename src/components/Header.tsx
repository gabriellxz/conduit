import { MdOutlineWbSunny } from "react-icons/md"
import { useTheme } from "../hooks/useTheme"
import { IoMoonOutline } from "react-icons/io5";
import Button from "./Button";

export default function Header() {

    const { theme, toggle } = useTheme();
    const isDark = theme === "dark"

    return (
        <header className="text-texto sm:flex md:justify-around sm:justify-between items-center p-5 fixed w-full bg-fundo border-b-[0.5px] border-texto-sec/20 z-10">
            <p className="text-3xl font-display">conduit<span className="text-destaque">.</span></p>
            <div className="flex items-center gap-5 flex-wrap font-semibold">
                <Button className="bg-destaque-suave text-destaque rounded-4xl p-2" text="Início" />
                <Button className="rounded-4xl p-2" text="Entrar" />
                <Button className="bg-destaque text-destaque-suave rounded-4xl p-2" text="Criar conta"/>
                <button onClick={toggle}>
                    {isDark ? <MdOutlineWbSunny /> : <IoMoonOutline />}
                </button>
            </div>
        </header>
    )
}
