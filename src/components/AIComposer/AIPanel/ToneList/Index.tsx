export interface IToneListProps {
  tones: string[];
  tone: string;
  setTone: (val: string) => void;
}

const ToneList = ({ tones, tone, setTone }: IToneListProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {tones.map((t) => {
        return (
          <button
            key={t}
            onClick={() => setTone(t)}
            className={`px-4 py-1.5 rounded-full text-sm transition-all border ${t === tone ? "bg-red-500 border-red-500 text-white" : "bg-white border-slate-200 text-slate-500 hover:border-slate-300"}`}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
};

export default ToneList;
