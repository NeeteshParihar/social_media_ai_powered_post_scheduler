import Header from "./Header";
import GeneratedList from "./GeneratedList";

const GeneratedPanel = ({ generations, setActiveScheduler }) => {
  return (
    <div className="space-y-6 pt-12 border-t border-slate-100">
      {/* heading */}
      <Header total={generations.length} />
      {/* rendering list*/}
      <GeneratedList
        generations={generations}
        setActiveScheduler={setActiveScheduler}
      />
    </div>
  );
};

export default GeneratedPanel;
