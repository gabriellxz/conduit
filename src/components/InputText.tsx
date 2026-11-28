interface InputTextProps {
    type: string;
    fn?: () => void;
}

export default function InputText({type, fn}: InputTextProps) {
    return (
        <input type={type} onChange={fn} className="bg-superficie border-[0.5px] border-borda-campo p-3 rounded-2xl" />
    )
}