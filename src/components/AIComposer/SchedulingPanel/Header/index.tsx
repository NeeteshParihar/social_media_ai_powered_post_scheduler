
import { XIcon } from "lucide-react";

export interface IHeaderProps {
    setActiveGeneratedContent: (val: any | null) => void;
}

const Header = ({
    setActiveGeneratedContent
}: IHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-8 py-4 border-b border-slate-100 bg-slate-50/30">
      <h3 className="text-slate-600"> Schedule Generation </h3>
      <button
        onClick={() => setActiveGeneratedContent(null)}
        className="p-2 rounded-full hover:bg-slate-100 text-slate-400 transition-colors"
      >
        <XIcon className="size-5" />
      </button>
    </div>
  );
};
export default Header;
