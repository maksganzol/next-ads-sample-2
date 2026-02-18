import { PostItem } from "@/lib/mockPosts";
import { Calendar } from "lucide-react";

interface PostCardProps {
  post: PostItem;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
            {post.category}
          </span>
          <div className="flex items-center gap-1">
            <Calendar size={14} />
            <span>{post.date}</span>
          </div>
        </div>
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {post.description}
        </p>
      </div>
    </article>
  );
}
