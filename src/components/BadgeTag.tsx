interface BadgeTagProps {
    tags: string
}

export default function BadgeTag({ tags }: BadgeTagProps) {
    return (
        <span className="border border-texto-sec px-2 rounded-xl">{tags}</span>
    )
}