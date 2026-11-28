interface InputTextProps {
    type: string;
}

export default function InputText({type, ...props}: InputTextProps) {
    return (
        <input {...props} type={type} className="bg-superficie border-[0.5px] border-borda-campo p-3 rounded-2xl" />
    )
}