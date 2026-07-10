import ComposeForm from "./ComposeForm";

const ComposePanel = ({
  content,
  setContent,
  mediaFile,
  setMediaFile,
  scheduleDate,
  setScheduleDate,
  scheduleTime,
  setScheduleTime,
  loading,
  handleSchedule,
  togglePlatform,
  selectPlatforms,
}) => {
  return (
    <div className="w-full lg:w-[460px] shrink-0">
      <div className="bg-white rounded-2xl border border-slate-200 p-6">
        {/* heading */}
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-lg text-slate-700"> Compose Posts </h2>
        </div>

        {/* form for composing posts */}
        <ComposeForm
          content={content}
          setContent={setContent}
          mediaFile={mediaFile}
          setMediaFile={setMediaFile}
          scheduleDate={scheduleDate}
          setScheduleDate={setScheduleDate}
          scheduleTime={scheduleTime}
          setScheduleTime={setScheduleTime}
          loading={loading}
          handleSchedule={handleSchedule}
          togglePlatform={togglePlatform}
          selectPlatforms={selectPlatforms}
        />
      </div>
    </div>
  );
};

export default ComposePanel;
