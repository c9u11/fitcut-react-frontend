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
    <div className="size-full flex flex-col justify-center items-center bg-zinc-900 gap-2 hover:bg-zinc-800 relative">
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
  );
}
