import React, { useEffect, useState } from "react";
import { dummyPostsData } from "../assets/assets";
import ComposePanel from "../components/scheduler/ComposePanel";
import QueuePanel from "../components/scheduler/QueuePanel";

const Scheduler = () => {
  
  const [posts, setPosts] = useState<any[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
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

  const togglePlatform = (platformId: string) => {
    if (selectedPlatforms.includes(platformId)) {
      setSelectedPlatforms(selectedPlatforms.filter((id) => id != platformId));
    } else {
      setSelectedPlatforms([...selectedPlatforms, platformId]);
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
      <ComposePanel
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
        selectPlatforms={selectedPlatforms}
      />
      {/* Queue panel */}
      <QueuePanel posts={posts} />      
    </div>
  );
};

export default Scheduler;
