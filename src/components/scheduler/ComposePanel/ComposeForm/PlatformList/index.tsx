
import type { Platform } from "../../../../../assets/assets";

interface IPlatformListProps {
    PLATFORMS: Platform[];
    selectPlatforms: string[];
    togglePlatform: ( id: string ) => void;
}

const PlatformList = ({ PLATFORMS, selectPlatforms, togglePlatform }: IPlatformListProps ) => {
  return (
    <div>
      <label className="block text-xs text-slate-500 uppercase mb-2">
        Platforms
      </label>
      {/* platform list */}
      <div className="flex flex-wrap gap-3">
        {PLATFORMS.map((platform) => {
          // check if this platform is selected of not
          const selected = selectPlatforms.includes(platform.id);
          return (
            <button
              key={platform.id}
              type="button"
              onClick={() => togglePlatform(platform.id)}
              className={`flex items-center gap-1.5 p-3 rounded-md border transition-all duration-150 ${selected ? "bg-red border-red-300 text-red-500 scale-103" : "border-slate-200 text-slate-500 hover:border-slate-300"}`}
            >
              <platform.icon className="size-4.5" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PlatformList;