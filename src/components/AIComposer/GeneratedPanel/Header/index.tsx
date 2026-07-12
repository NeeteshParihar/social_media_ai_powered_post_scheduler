import {HistoryIcon} from "lucide-react";

const Header = ({total}: {total:number}) => {
  return (
    <div className="flex items-center gap-2 text-slate-600">
      <HistoryIcon className="size-5" />
      <h2 className="text-xl"> Recent Generations </h2>
      <div className="flex-1" />
      <span className="text-sm text-slate-500 bg-slate-50 px-2">
        {total} total
      </span>
    </div>
  );
};

export default Header;
