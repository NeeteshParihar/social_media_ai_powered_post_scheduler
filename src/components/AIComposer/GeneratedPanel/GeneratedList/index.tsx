import { Wand2Icon } from "lucide-react";
import GeneratedPost from "./GeneratedPost";

const GeneratedList = ({ generations, setActiveScheduler }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {/* rendered if it has elements */}
      {generations.map((gen) => {
        return (
          <GeneratedPost
            key={gen.id}
            post={gen}
            handleClick={() => setActiveScheduler(gen)}
          />
        );
      })}

      {/* if the ai generated content is 0 then render another card */}

      {generations.length === 0 && (
        <div className="col-span-full text-center space-y-2">
          <div className="size-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-slate-300">
            <Wand2Icon className="size-6" />
          </div>
          <p className="text-slate-500">
            No content generated yet. Try generating some content using AI.
          </p>
        </div>
      )}
    </div>
  );
};

export default GeneratedList;
