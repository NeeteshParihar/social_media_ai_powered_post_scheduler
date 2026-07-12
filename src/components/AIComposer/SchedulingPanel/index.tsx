import Header, { type IHeaderProps } from "./Header";
import SchedulingContent, {
  type ISchedulingContentProps,
} from "./SchedulingContent";

interface SchedulingPanelProps extends IHeaderProps, ISchedulingContentProps {}

const SchedulingPanel = ({
  generatedContent,
  setActiveGeneratedContent,
  selectedPlatforms,
  setSelectedPlatforms,
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
  scheduling,
  handlePostScheduling,
}: SchedulingPanelProps) => {
  return (
    <div className="fixed inset-0 min-h-screen z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
        {/* header */}
        <Header setActiveGeneratedContent={setActiveGeneratedContent} />

        <SchedulingContent
          generatedContent={generatedContent}
          selectedPlatforms={selectedPlatforms}
          setSelectedPlatforms={setSelectedPlatforms}
          scheduleDate={scheduleDate}
          setScheduleDate={setScheduleDate}
          scheduleTime={scheduleTime}
          setScheduleTime={setScheduleTime}
          scheduling={scheduling}
          handlePostScheduling={handlePostScheduling}
        />
      </div>
    </div>
  );
};


export default SchedulingPanel;
