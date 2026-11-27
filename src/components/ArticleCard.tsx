import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import type { Article } from "../types/article";
import { formatDate } from "../utils/formatDate";

interface ArticleProps {
    data: Article;
}

export default function ArticleCardView({ data }: ArticleProps) {
    return (
        <div className="bg-superficie p-4 rounded-4xl mb-3">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <FaRegUser size={30} />
                    <div>
                        <p>{data.author.username}</p>
                        <p className="text-sm text-texto-sec">{formatDate(data.createdAt)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border border-destaque rounded-4xl p-2 text-destaque">
                    <CiHeart />
                    <span>{data.favoritesCount}</span>
                </div>
            </div>

            <h1 className="font-display text-2xl">
                {data.title}
            </h1>
            <p className="mt-2 text-sm text-texto-sec">
                {data.description}
            </p>
        </div>
    )
}