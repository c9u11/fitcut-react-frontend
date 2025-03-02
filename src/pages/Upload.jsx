import { FaImage } from "react-icons/fa6";
import useStep from "../hooks/useStep";

export default function () {
  const { goStep } = useStep();
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      localStorage.setItem("uploadedImage", base64);
      goStep("crop");
    };
  };
  return (
    <div className="size-full flex-col flex text-white px-[20%]">
      <div className="h-[10%] flex flex-col justify-center px-[30px] gap-2">
        <h1 className="text-4xl font-semibold tracking-wide">FitCut</h1>
        <h2 className="text-1xl">인스타그램 그리드에 맞게 사진 자르기</h2>
      </div>
      <div className="w-full h-[80%] flex flex-col justify-center items-center bg-zinc-900 gap-2 hover:bg-zinc-800 relative">
        <FaImage className="text-zinc-400 h-[50px] w-[50px]" />
        <span className="text-1xl text-center text-zinc-400">
          PNG, JPG 형식
          <br />
          이미지 드래그 혹은 업로드
        </span>
        <input
          type="file"
          className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
    </div>
  );
}
