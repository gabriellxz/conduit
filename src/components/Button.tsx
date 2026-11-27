interface BtnProps {
    className: string;
    fn?: () => void;
    text: string;
}

export default function Button({className, fn, text}:BtnProps) {
    return (
        <button className={className} onClick={fn}>
            {text}
        </button>
    )
}