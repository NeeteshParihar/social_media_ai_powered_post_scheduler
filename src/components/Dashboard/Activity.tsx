
import { SendIcon } from "lucide-react";

const Activity = ({activity}) => {
  return (
    <div className="flex items-start gap-4 px-6 py-4 hover:bg-slate-50/50 transition-colors">
      {/* icon */}
      <div className="size-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 bg-zinc-100 text-zinc-600">
        <SendIcon className="size-4" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
            {" "}
            Published{" "}
          </span>
          <span className="text-xs text-slate-400 shrink-0">
            {" "}
            {new Date(activity.createdAt).toLocaleString()}{" "}
          </span>
        </div>
        <p className="text-sm text-slate-600"> {activity.description}</p>
      </div>
    </div>
  );
};

export default Activity