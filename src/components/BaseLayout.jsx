export default function ({ children }) {
  return (
    <div className="size-full flex-col flex text-white px-[20%]">
      <div className="h-[10%] flex flex-col justify-center px-[30px] gap-2">
        <h1 className="text-4xl font-semibold tracking-wide">FitCut</h1>
        <h2 className="text-1xl">인스타그램 그리드에 맞게 사진 자르기</h2>
      </div>
      <div className="w-full h-[80%]">{children}</div>
    </div>
  );
}
