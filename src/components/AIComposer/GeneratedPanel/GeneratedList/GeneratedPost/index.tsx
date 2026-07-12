
export interface IGeneratedPostProps {
    post: any[];
    handleClick: () => void;
}

const GeneratedPost = ({post, handleClick}) => {

  return (
    <div
      className="group bg-white rounded-2xl border border-slate-100 p-5 hover:border-red-200 transition-all relative overflow-hidden"
    >
      <div className="flex flex-col h-full space-y-4">
        {/* display date and tone */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-slate-400 uppercase tracking-widest">
            {" "}
            {new Date(post.createdAt).toLocaleString()}{" "}
          </span>
          <span className="text-xs text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
            {" "}
            {post.tone}{" "}
          </span>
        </div>
        {/* display text content */}
        <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed flex-1">
          {" "}
          {post.content}{" "}
        </p>

        {/* display the media if available */}
        {post.mediaUrl && (
          <div className="rounded-xl overflow-hidden border border-slate-50 bg-slate-50">
            <img
              src={post.mediaUrl}
              alt="Gen"
              className="w-full aspect-video object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
        )}

        <div className="flex items-center gap-2 pt-2">
          <button
            onClick={handleClick}
            className="flex-1 bg-slate-100 hover:bg-red-500 hover:text-white text-slate-600 text-xs py-2.5 rounded-lg transition-all"
          >
            Schedule post
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default GeneratedPost;