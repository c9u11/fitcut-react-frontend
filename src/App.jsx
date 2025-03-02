import Background from "./components/Background";
import Upload from "./pages/Upload";
import { useEffect } from "react";
import useStep from "./hooks/useStep";
import BaseLayout from "./components/BaseLayout";

function App() {
  const { step, initStep } = useStep();
  useEffect(() => {
    initStep();
  }, []);
  return (
    <div className="w-dvw h-dvh">
      <Background />
      <BaseLayout>{step === "upload" && <Upload />}</BaseLayout>
    </div>
  );
}

export default App;
