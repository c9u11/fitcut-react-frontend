import { useLocation, useNavigate } from "react-router-dom";

const useStep = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get("step");
  const navigate = useNavigate();
  const goStep = (nextStep, options) => {
    navigate(`?step=${nextStep}`, options);
  }
  const initStep = () => {
    goStep(step || "upload", { replace: true });
  }
  return { step, goStep, initStep };
}

export default useStep;