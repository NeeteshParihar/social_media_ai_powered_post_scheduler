import { useEffect, useState } from "react";
import { dummyGenerationData } from "../assets/assets";
import AIPanel from "../components/AIComposer/AIPanel";
import GeneratedPanel from "../components/AIComposer/GeneratedPanel";
import SchedulingPanel from "../components/AIComposer/SchedulingPanel";

const AIComposer = () => {
  
  const [prompt, setPrompt] = useState(""); // ai prompt
  const [tone, setTone] = useState("Professional"); // tone
  const [generateImage, setGenerateImage] = useState(true); // for deciding if user wants the image or not
  const [loading, setLoading] = useState(false); //  for post generating
  const [generations, setGenerations] = useState<any[]>([]); // ai generated posts

  // Scheduling state
  const [activeScheduler, setActiveScheduler] = useState<any>(null); // selects the generated post
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]); // selected platoforms id's
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");
  const [scheduling, setScheduling] = useState(false);

  const fetchGenerations = async () => {
    setGenerations(dummyGenerationData);
  };

  const handleGenerateImage = async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handlePlatformslection = (pId: string) => {
    const temp = selectedPlatforms.filter((id) => id != pId);
    // not removes means not selected
    if (temp.length === selectedPlatforms.length) {
      temp.push(pId);
    }
    setSelectedPlatforms(temp);
  };

  const handlePostScheduling = async () => {
    setScheduling(true);
    setTimeout(() => {
      setScheduling(false);
      // setActiveScheduler(null);
    }, 2000);
  };

  useEffect(() => {
    fetchGenerations();
  }, []);

  const tones = ["Professional", "Creative", "Funny", "Minimalist", "Excited"];
  // animate-in fade-in : used to animate from opacity o to 1
  // logically every component has its own layout, and that layout uses some fundamental components, we can either define layour in the page/component or as a seperate component
  return (
    <div className=" max-w-4xl mx-auto  space-y-12 pb-20 animate-in fade-in duration-700">
      {/* Input section */}
      <AIPanel
        prompt={prompt}
        setPrompt={setPrompt}
        generateImage={generateImage}
        setGenerateImage={setGenerateImage}
        loading={loading}
        handleGenerateImage={handleGenerateImage}
        tones={tones}
        tone={tone}
        setTone={(t: string) => setTone(t)}
      />

      {/* Ai generated Posts */}
      <GeneratedPanel
        generations={generations}
        setActiveScheduler={setActiveScheduler}
      />

      {/* Scheduler Modal */}
      {activeScheduler && (
        <SchedulingPanel
          generatedContent={activeScheduler}
          setActiveGeneratedContent={setActiveScheduler}
          selectedPlatforms={selectedPlatforms}
          setSelectedPlatforms={setSelectedPlatforms}
          scheduleDate={scheduleDate}
          setScheduleDate={setScheduleDate}
          scheduleTime={scheduleTime}
          setScheduleTime={setScheduleTime}
          scheduling={scheduling}
          handlePostScheduling={handlePostScheduling}
        />
      )}
    </div>
  );
};

export default AIComposer;
