import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import type { Article } from "../types/article";
import { formatDate } from "../utils/formatDate";
import BadgeTag from "./BadgeTag";

interface ArticleProps {
    data: Article;
}

export default function ArticleCard({ data }: ArticleProps) {
    return (
        <div className="bg-superficie p-4 rounded-[18px] mb-4 border-[0.5px] border-texto-sec/20">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                    <FaRegUser size={28} />
                    <div>
                        <p>{data.author.username}</p>
                        <p className="text-sm text-texto-sec">{formatDate(data.createdAt)}</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 border border-destaque rounded-3xl px-2 text-destaque">
                    <CiHeart />
                    <span>{data.favoritesCount}</span>
                </div>
            </div>

            <div className="mt-3">
                <h1 className="font-display text-2xl">
                    {data.title}
                </h1>
                <p className="mt-2 text-sm text-texto-sec">
                    {data.description}
                </p>
            </div>

            <div className="flex gap-2 flex-wrap text-texto-sec text-sm mt-3">
                {
                    data.tagList.map((tag: string, index: number) => (
                        <BadgeTag tags={tag} key={index} />
                    ))
                }
            </div>
        </div>
    )
}