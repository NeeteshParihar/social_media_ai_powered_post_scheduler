import { CalendarDaysIcon, SendIcon } from "lucide-react";
import PostCard from "./PostCard";

interface IPostListProps {
  postsList: any[];
  title: string;
  componentType: "scheduled" | "published";
}

const PostList = ({ postsList, title, componentType }: IPostListProps) => {
  return (
    <div className="bh-white rounded-2xl border border-slate-200 overflow-hidden">
      {/* upper div for post type headings */}
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-slate-100">
        {componentType === "scheduled" ? (
          <CalendarDaysIcon className="size-4 text-zinc" />
        ) : (
          <SendIcon className="size-4 text-zinc" />
        )}
        <h3 className="text-slate-900 text-sm"> {title} </h3>
        <span className="ml-auto text-xs font-bold bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full">
          {" "}
          {postsList.length}{" "}
        </span>
      </div>

      {/* here goes the upcoming posts cards */}
      <div className="max-h-72 overflow-y-auto divide-y divide-slate-200">
        {postsList.length == 0 ? (
          <div className="py-10 text-center text-slate-400 text-sm">
            No Posts {componentType === "scheduled" ? "Scheduled" : "Published"}{" "}
            Yet
          </div>
        ) : (
          postsList.map((post) => {
            return (
              <PostCard
                key={post._id}
                post={post}
                componentType={componentType}
              />
            );
          })
        )}
      </div>
      
    </div>
  );
};

export default PostList;
