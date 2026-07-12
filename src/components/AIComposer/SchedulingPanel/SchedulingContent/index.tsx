import { PLATFORMS } from "../../../../assets/assets";
import { CalendarIcon, TimerIcon, Loader2Icon, ClockIcon } from "lucide-react";

export interface ISchedulingContentProps {
  generatedContent: any;
  selectedPlatforms: string[],
  setSelectedPlatforms: (val: string[]) => void;
  scheduleDate: string
  setScheduleDate: (val: string) => void;
  scheduleTime: string;
  setScheduleTime: (val: string) => void;
  scheduling: boolean;
  handlePostScheduling: () => Promise<void>;
}

const SchedulingContent = ({
  generatedContent,
  selectedPlatforms,
  setSelectedPlatforms,
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
  scheduling,
  handlePostScheduling,
}: ISchedulingContentProps) => {
  const handlePlatformslection = (pId: string) => {
    const temp = selectedPlatforms.filter((id) => id != pId);
    // not removes means not selected
    if (temp.length === selectedPlatforms.length) {
      temp.push(pId);
    }
    setSelectedPlatforms(temp);
  };

  return (
    <div className="flex-1 overflow-y-auto p-8 space-y-4">
      {/* display the prompt */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
        <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">
          {generatedContent.prompt}
        </p>
      </div>

      {/* display the text content and image if its present */}
      <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 space-y-4">
        <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">
          {generatedContent.content}
        </p>
        {generatedContent.mediaUrl && (
          <img
            src={generatedContent.mediaUrl}
            alt="preview"
            className="w-full aspect-video object-cover rounded-xl border border-slate-200 shadow-sm"
          />
        )}
      </div>

      {/* display the platforms */}
      <div className="p-8 bg-slate-50/50 border-t border-slate-50 space-y-8">
        {/* options */}
        <div>
          <label className="block text text-slate-600 uppercase tracking-widest mb-4">
            Select Channels
          </label>
          {/* render the platforms */}
          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p) => {
              const isSelected = selectedPlatforms.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => handlePlatformslection(p.id)}
                  className={`p-2.5 rounded-md border text-xs ${isSelected ? "bg-red-500/80 text-white" : "bg-white border-slate-200 text-slate-400 hover:border-slate-300"}`}
                >
                  <p.icon className="size-4.5" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* displaying date and time  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* date input */}
        <div className="relative">
          <CalendarIcon className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 " />
          <input
            type="date"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-md text-slate-900 text-sm focus:outline-none transition-all"
            value={scheduleDate}
            onChange={(e) => setScheduleDate(e.target.value)}
          />
        </div>
        {/* time input */}
        <div className="relative">
          <ClockIcon className="size-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
          <input
            type="time"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-100 rounded-md text-slate-900 text-sm focus:outline-none transition-all"
            value={scheduleTime}
            onChange={(e) => setScheduleTime(e.target.value)}
          />
        </div>
      </div>

      <button
        disabled={scheduling}
        onClick={handlePostScheduling}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-md bg-slate-200 text-slate-700 hover:bg-red-500 hover:text-white transition"
      >
        {scheduling ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <TimerIcon className="size-4" />
        )}
        Schedule Post
      </button>
    </div>
  );
};

export default SchedulingContent;
