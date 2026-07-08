import { CheckCircleIcon, ExternalLinkIcon, XIcon } from "lucide-react";
import { PLATFORMS } from "../../assets/assets";
import PlatformCard from "./PlatformCard";

interface IPlatFormPickerModelProps {
  connectedIds: string[];
  connecting: string | null;
  onClose: () => void;
  onConnect: (PlatformId: string) => Promise<void>;
}

const PlatFormPicker = ({
  connectedIds,
  connecting,
  onClose,
  onConnect,
}: IPlatFormPickerModelProps) => {
  return (
    <div className=" fixed inset-0 h-screen z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md border border-slate-100">
        {/* Header  */}
        <div className="flex items-center justify-between px-6 py-4 shadow">
          <h3 className="text-slate-700"> Choose a Platform </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <XIcon className="size-4" />
          </button>
        </div>

        {/* Platform list  */}
        <div className="p-6 flex flex-col gap-2">
          {PLATFORMS.map((pltfrm) => {
            const isConnected = connectedIds.includes(pltfrm.id);
            const isConnecting = connecting === pltfrm.id;
            return (
              <PlatformCard
                key={pltfrm.id}
                platform={pltfrm}
                onConnect={onConnect}
                isConnected={isConnected}
                isConnecting={isConnecting}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PlatFormPicker;
