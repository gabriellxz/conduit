import Button from "./Button";

interface TextErrorProps {
    refetch: () => void;
}

export default function TextError({ refetch }: TextErrorProps) {
    return (
        <div className="flex justify-center border-2 border-dashed border-line border-perigo p-4 rounded-[18px]">
            <div>
                <p className="text-texto-sec">
                    Algo deu errado. Verifique sua conexão.
                </p>
                <div className="flex justify-center">
                    <Button fn={refetch} className="bg-destaque text-destaque-suave rounded-4xl p-2 font-semibold mt-5" text="Tentar novamente" />
                </div>
            </div>
        </div>
    )
}