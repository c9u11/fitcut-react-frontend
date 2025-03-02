import Background from "./components/Background";
import Upload from "./pages/Upload";
import { useEffect } from "react";
import useStep from "./hooks/useStep";

function App() {
  const { step, initStep } = useStep();
  useEffect(() => {
    initStep();
  }, []);
  return (
    <div className="w-dvw h-dvh">
      <Background />
      {step === "upload" && <Upload />}
    </div>
  );
}

export default App;
