import { Loader2Icon, ArrowRightIcon } from "lucide-react";

export interface IPromptAndControlsProps {
  prompt: string;
  setPrompt: (val: string) => void;
  generateImage: boolean;
  setGenerateImage: (val: boolean) => void;
  loading: boolean;
  handleGenerateImage: () => Promise<void>;
}

const PromptAndControls = ({
  prompt,
  setPrompt,
  generateImage,
  setGenerateImage,
  loading,
  handleGenerateImage,
}: IPromptAndControlsProps) => {
  return (
    <div className=" relative group mt-12 pb-5">
        {/* prompt goes here */}
      <textarea
        autoFocus
        placeholder="Share your idea...(e.g. A post about the launch of our new eco-friendly coffee beans"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full px-6 py-6 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 outline-none focus:border-slate-400 transition resize-none h-40"
      />
      {/* controls goes here */}
      <div className="absolute -bottom-1 right-2.5 flex items-center gap-3 text-sm">
        {/* generate image toggle button */}
        <button
          onClick={() => setGenerateImage( !generateImage ) }
          className="flex items-center gap-1 text-xs"
        >
          <span className="shrink-0"> AI image </span>
          <div
            className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors durations-200 ease-in-out focus:outline-none  ${
              generateImage ? "bg-red-500" : "bg-slate-200"
            }`}
          >
            <span
              className={`pointer-events-none size-4 transform translate-y-0.5 rounded-full bg-white transition ${generateImage ? "translate-x-4.5" : "transalte-x-0.5"}`}
            />
          </div>
        </button>
        {/* button to display loading state */}
        <button
          disabled={loading}
          onClick={handleGenerateImage}
          className="flex items-center gap-1 border border-slate-200 px-4 py-1 rounded-xl bg-slate-200 text-slate-600 text-xs"
        >
          {loading ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              <span> Generating... </span>
            </>
          ) : (
            <>
              Generate
              <ArrowRightIcon className="size-4" />
            </>
          )}
        </button>
      </div>      
    </div>
  );
};

export default PromptAndControls;
