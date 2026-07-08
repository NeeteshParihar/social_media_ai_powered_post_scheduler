import React, { useEffect, useState } from "react";
import { dummyPostsData, PLATFORMS } from "../assets/assets";
import { ArrowRightIcon, CalendarDaysIcon } from "lucide-react";
import PlatformList from "../components/scheduler/PlatFormList";
import TextContent from "../components/scheduler/TextContent";
import MediaInput from "../components/scheduler/MediaInput";
import DateTimeComponent from "../components/scheduler/DateTime";

const Scheduler = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [selectPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setPosts(dummyPostsData);
  };

  useEffect(() => {
    (async () => await fetchPosts())();
    const interval = setInterval(async () => await fetchPosts(), 1000);
    return () => clearInterval(interval);
  }, []);

  const scheduledPosts = posts.filter((post) => post.status === "scheduled");
  const publishedPosts = posts.filter((post) => post.status === "published");

  const togglePlatform = (platformId: string) => {
    if (selectPlatforms.includes(platformId)) {
      setSelectedPlatforms(selectPlatforms.filter((id) => id != platformId));
    } else {
      setSelectedPlatforms([...selectPlatforms, platformId]);
    }
  };

  const handleSchedule = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setPosts((prev) => [...prev, dummyPostsData[0]]);
    }, 1000);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full">
      {/*  compose panel */}
      <div className="w-full lg:w-[460px] shrink-0">
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          {/* heading */}
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-lg text-slate-700"> Compose Posts </h2>
          </div>

          {/* form for composing posts */}
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
        </div>
      </div>

      {/* Queue panel */}
      <div className="flex-1 flex flex-col gap-6 min-w-0">
        {/* upcoming ( to be posted ) */}
        <div className="bh-white rounded-2xl border border-slate-200 overflow-hidden">
          <div className="flex items-center gap-2.5 px-5 py-4 border-b border-slate-100">
            <CalendarDaysIcon className="size-4 text-zinc" />
            <h3 className="text-slate-900 text-sm"> Upcoming </h3>

            <span className="ml-auto text-xs font-bold bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded-full">
              {" "}
              {scheduledPosts.length}{" "}
            </span>
          </div>
        </div>

        {/* published */}
      </div>
    </div>
  );
};

export default Scheduler;
