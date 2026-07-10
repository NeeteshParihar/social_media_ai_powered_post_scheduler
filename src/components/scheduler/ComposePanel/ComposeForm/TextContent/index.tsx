interface ITextContentProps {
  content: string;
  setContent: (text: string) => void;
}

const TextContent = ({ content, setContent }: ITextContentProps) => {
  return (
    <div>
      <label className="bloack text-xs text-slate-50 uppercase mb-2">
        Content
      </label>
      <textarea
        required
        rows={5}
        placeholder="What do you want to share todays?"
        className="w-full px-5 py-4 bg-slate-100 border border-slate-200 rounded-2xl text-slate-900 text-sm placeholder-slate-400 outline-none  resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div
        className={`text-right text-xs mt-1 font-medium ${content.length > 270 ? "text-red-500" : "text-slate-400"}`}
      >
        {content.length}/280
      </div>
    </div>
  );
};

export default TextContent;

