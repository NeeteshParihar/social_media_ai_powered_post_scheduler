import { PLATFORMS } from "../../../../../assets/assets";

interface IPostCardProps {
  post: any;
  componentType: "scheduled"| "published";
}

const PostCard = ({ post, componentType }: IPostCardProps) => {
  return (
    <div      
      className="px-5 py-4 hover:bg-slate-50/60 transition-colors"
    >
      {/* platforms, media and date info */}
      <div className="flex items-center justify-between  mb-2 flex-wrap">
        {/* platform icons, iterate the ids and find the platform */}
        <div className="">
          {post.platforms.map((pId: string) => {
            const platform = PLATFORMS.find((p) => p.id === pId);
            return platform ? (
              <platform.icon className="size-3.5 text-slate-400" />
            ) : null;
          })}
        </div>

        {/* check for media and render it along with the date */}
        <div className="flex items-center gap-2">
          {/* render media */}
          {post.mediaType && (
            <span className="text-xs bg-slate-100 text-slate-600 border-slate-200 px-1.5 py-0.5 rounded-md font-semibold capitalize">
              {" "}
              {post.mediaType}{" "}
            </span>
          )}
          {/* render the date */}
          <span className="text-xs text-slate-600 font-semibold tracking-tight">
            {new Date(post.scheduledFor).toLocaleString()}
          </span>
          <span className={`text-xs  px-2 py-0.5 rounded-full border ${  componentType === "scheduled"? "bg-yellow-50 text-yellow-700  border-yellow-100": "bg-green-50 text-green-700  border-green-100"}`}>
            { componentType === "scheduled"? "Upcoming": "Published" }
          </span>
        </div>
      </div>
      {/* display the text content */}
      <p className="text-xs  text-slate-500 tracking-wide line-clamp-2 text-start">
        {post.content}
      </p>
    </div>
  );
};

export default PostCard;
