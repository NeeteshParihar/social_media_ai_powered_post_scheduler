import { PLATFORMS } from "../../../../assets/assets";
import { ArrowRightIcon } from "lucide-react";

import PlatformList from "./PlatformList";
import TextContent from "./TextContent";
import MediaInput from "./MediaInput";
import DateTimeComponent from "./DateTime";

const ComposeForm = ({
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
  selectPlatforms
}) => {
  return (
    <form className="space-y-5" onSubmit={handleSchedule}>
      {/* platforms */}
      <PlatformList
        PLATFORMS={PLATFORMS}
        selectPlatforms={selectPlatforms}
        togglePlatform={togglePlatform}
      />
      {/* content */}
      <TextContent content={content} setContent={setContent} />

      {/* media upload */}
      <MediaInput mediaFile={mediaFile} setMediaFile={setMediaFile} />

      {/* Date & time */}
      <DateTimeComponent
        scheduleDate={scheduleDate}
        setScheduleDate={setScheduleDate}
        scheduleTime={scheduleTime}
        setScheduleTime={setScheduleTime}
      />

      {/* submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 py-3.5 bg-red-500 hover:bg-red-600 transition-all text-white rounded-lg"
      >
        {loading ? (
          <>
            <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Scheduling...
          </>
        ) : (
          <>
            Schedule Post
            <ArrowRightIcon className="size-4" />
          </>
        )}
      </button>
      
    </form>
  );
};
export default ComposeForm;
