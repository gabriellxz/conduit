import { Link } from "react-router-dom";
import InputText from "../components/InputText";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import type { User } from "../types/user";
import { useCreateUser } from "../hooks/useUsers";

export default function Register() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm<User>();

    const { mutation } = useCreateUser();

    function submit(data: User) {
        mutation.mutate(data, {
            onSuccess: () => reset()
        })
    }

    return (
        <div className="flex justify-center">
            <form className="text-texto max-w-115 w-full" onSubmit={handleSubmit(submit, (errors) => console.log(errors))}>
                <div>
                    <h1 className="font-display text-[2.2rem]">Criar conta</h1>
                    <p className="text-texto-sec">
                        Já tem uma conta? <Link to={"/login"} className="text-destaque underline">Entre aqui.</Link>
                    </p>
                </div>
                <div className="mt-5">
                    <div className="flex flex-col mb-5">
                        <label className="mb-1">Nome do usuário</label>
                        <InputText 
                        {...register('username', { required: "Nome é obrigatório" })} 
                        type="text" 
                        />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-1">E-mail</label>
                        <InputText {...register('email', { required: "E-mail é obrigatório" })} type="email" />
                    </div>
                    <div className="flex flex-col mb-5">
                        <label className="mb-1">Senha</label>
                        <InputText {...register('password', { required: "Senha é obrigatório" })} type="password" />
                    </div>
                    <Button text="Criar conta" className="bg-destaque text-destaque-suave rounded-4xl p-2 w-full font-semibold" />
                </div>
            </form>
        </div>
    )
}