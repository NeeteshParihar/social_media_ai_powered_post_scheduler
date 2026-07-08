import { CheckCircleIcon, ExternalLinkIcon } from "lucide-react";

interface IPlatform {
  platform: any;
  isConnected: boolean;
  isConnecting: boolean;
  onConnect: (PlatformId: string) => Promise<void>
}

const PlatformCard = ({ platform, isConnected, isConnecting, onConnect }: IPlatform) => {
  return (
    <button
      type="button"
      disabled={isConnected || isConnecting}
      onClick={()=>onConnect(platform.id)} 
      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${isConnected? "border-red-200 bg-red-50 cursor-default": "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100 cursor-pointer"}`}
    >
      {/* icon */}
      <div className="p-2">
        <platform.icon
          className={`size-5 ${isConnected ? "text-red-600" : "text-slate-500"}`}
        />
      </div>
      {/* Label */}
      <div className="flex-1 min-w-0">
        <div
          className={`text-sm ${isConnected ? "text-red-700" : "text-slate-800"}`}
        >
          {platform.name}
        </div>
        <div className="text-xs text-slate-500 truncate">
          {isConnected ? "Already connected!" : platform.description}
        </div>
      </div>
      {/* status */}
      {isConnected && (
        <span title="connected">
          <CheckCircleIcon className="size-4 text-red-500 shrink-0" />
        </span>
      )}
      {isConnecting && (
        <div className="size-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin shrink-0" />
      )}
      {!isConnected && !isConnecting && (
        <span title="connect">
          <ExternalLinkIcon className="size-3.5 text-slate-400 shrink-0" />
        </span>
      )}
    </button>
  );
};


export default PlatformCard;
