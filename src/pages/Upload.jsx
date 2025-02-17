import { FaImage } from "react-icons/fa6";

export default function () {
  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      localStorage.setItem("uploadedImage", base64); // localStorage 저장
    };
  };
  return (
    <div className="size-full flex-col flex text-white px-[20%]">
      <div className="h-[20%] flex flex-col justify-end p-[30px]">
        <h1 className="text-5xl font-semibold">FitCut</h1>
        <h2 className="text-2xl">인스타그램 그리드에 맞게 사진 자르기</h2>
      </div>
      <div className="w-full h-[60%] flex flex-col justify-center items-center bg-zinc-900 gap-3 hover:bg-zinc-800 relative">
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
