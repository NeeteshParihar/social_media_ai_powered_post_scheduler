import { XIcon } from "lucide-react";

interface IMediaInputProps {
  mediaFile: File | null,
  setMediaFile: (file: File | null) => void;
}

const MediaInput = ({ mediaFile, setMediaFile }: IMediaInputProps) => {
  const handleMediaInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setMediaFile(e.target.files[0]);
    }
  };

  return (
    <div>
      <label className="block text-xs text-slate-500 uppercase mb-2">
        Media (optional)
      </label>
      {mediaFile ? (
        <div className="relative rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
          {/* media */}
          {mediaFile.type.startsWith("image/") ? (
            <img
              src={URL.createObjectURL(mediaFile)}
              alt="preview"
              className="w-full h-40 object-cover"
            />
          ) : (
            <video
              src={URL.createObjectURL(mediaFile)}
              controls
              className="w-full h-40 object-cover"
            />
          )}
          {/* button */}
          <button
            aria-label="Remove selected media"
            type="button"
            onClick={() => setMediaFile(null)}
            className="absolute top-2 right-2 size-7 bg-slate-900/60 hover:bg-slate-900/80 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <XIcon className="size-3.5" />
          </button>
        </div>
      ) : (
        <label
          aria-label="select media"
          htmlFor="media-file"
          className="cursor-pointer flex items-center justify-center gap-2 p-5 py-10 border-2 border-dashed border-slate-200 rounded-xl hover:border-red-300  hover:bg-red-50/30 transition-all group"
        >
          <span className="text-sm text-slate-500 group-hover:text-red-600 transition-colors">
            {" "}
            Click to upload image or video{" "}
          </span>
          <input
            id="media-file"
            type="file"
            accept="image/*,video/*"
            onChange={handleMediaInput}
            className="hidden"
          />
        </label>
      )}
    </div>
  );
};

export default MediaInput;
