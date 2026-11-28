import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function Login() {
    return (
        <div className="flex justify-center">
            <form className="text-texto max-w-115 w-full">
                <div>
                    <h1 className="font-display text-[2.2rem]">Entrar</h1>
                    <p className="text-texto-sec">
                        Novo por aqui? <Link to={""} className="text-destaque underline">Crie uma conta.</Link>
                    </p>
                </div>
                <div className="mt-5">
                    <div className="flex flex-col mb-5">
                        <label className="mb-1">E-mail</label>
                        <input type="email" className="bg-superficie border-[0.5px] border-borda-campo p-3 rounded-2xl" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-1">Senha</label>
                        <input type="email" className="bg-superficie border-[0.5px] border-borda-campo p-3 rounded-2xl" />
                    </div>
                    <Button text="Entrar" className="bg-destaque text-destaque-suave rounded-4xl p-2 w-full font-semibold" />
                </div>
            </form>
        </div>
    )
}