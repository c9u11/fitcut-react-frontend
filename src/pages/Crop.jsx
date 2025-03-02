import { useState, useEffect } from "react";
import useStep from "../hooks/useStep";
import { FaEdit } from "react-icons/fa";
import InstaLayout from "../components/InstaLayout";

const isIncludeSize = (idx, size) => {
  const [width, height] = size.split(" X ").map(Number);
  const columns = 3;
  const row = Math.floor(idx / columns);
  const col = idx % columns;
  return row < height && col < width;
};
const ActiveButtonClass = (active) =>
  `${
    active ? "bg-purple-500 text-white" : "bg-purple-950 text-zinc-400"
  } rounded-sm px-6 py-2 hover:bg-purple-800 hover:text-white hover:cursor-pointer`;

export default function () {
  const { goStep } = useStep();
  const [size, setSize] = useState("3 X 3");
  const goNext = () => {
    localStorage.setItem("size", size);
    goStep("resize");
  };
  useEffect(() => {
    const image = localStorage.getItem("uploadedImage");
    if (!image) {
      goStep("upload");
      return;
    }
  });
  return (
    <div className="size-full flex bg-zinc-900 p-10 gap-10 justify-center">
      <InstaLayout>
        {Array.from({ length: 15 }).map((_, index) => (
          <div
            key={index}
            className={`w-full aspect-[3/4] ${
              isIncludeSize(index, size) ? "bg-purple-200" : "bg-zinc-800"
            }`}
          />
        ))}
      </InstaLayout>
      <div className="flex flex-col gap-3 min-w-[130px] flex-1 justify-center max-w-[300px]">
        <span className="text-sm flex items-center gap-2">
          업로드 형식 <FaEdit />
        </span>
        <h2 className="text-lg mb-5">
          어떤 형태로
          <br />
          업로드하시나요?
        </h2>
        {["3 X 3", "3 X 1", "2 X 2", "3 X 4"].map((item) => {
          return (
            <button
              key={item}
              className={ActiveButtonClass(size === item)}
              onClick={() => setSize(item)}
            >
              {item}
            </button>
          );
        })}
        <div className="flex-1" />
        <button
          className="bg-zinc-700 rounded-sm px-6 py-2 cursor-pointer hover:bg-zinc-500"
          onClick={goNext}
        >
          다음
        </button>
      </div>
    </div>
  );
}
