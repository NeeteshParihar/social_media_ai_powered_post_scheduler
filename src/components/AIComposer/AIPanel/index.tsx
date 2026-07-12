import Header from "./Header";
import PromptAndControls from "./PromptAndControls";
import ToneList from "./ToneList/Index";

import type { IPromptAndControlsProps } from "./PromptAndControls";
import type { IToneListProps } from "./ToneList/Index";

interface IAIPanelProps extends IPromptAndControlsProps, IToneListProps {}

const AIPanel = ({
  prompt,
  setPrompt,
  generateImage,
  setGenerateImage,
  loading,
  handleGenerateImage,
  tones,
  tone,
  setTone,
}: IAIPanelProps) => {
  return (
    <div className=" space-y-6 text-center mt-20">
      {/* heading */}
      <Header />
      {/* input */}
      <PromptAndControls
        prompt={prompt}
        setPrompt={setPrompt}
        generateImage={generateImage}
        setGenerateImage={setGenerateImage}
        loading={loading}
        handleGenerateImage={handleGenerateImage}
      />
      {/* display the list of tones */}
      <ToneList tones={tones} tone={tone} setTone={setTone} />
    </div>
  );
};

export default AIPanel;
