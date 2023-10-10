export function Bar() {
  return (
    <>
      <div style={{ fontFamily: "Barlow" }} className="w-[100%] h-[80px] select-none flex justify-between items-center pl-[15%] pr-[15%] font-Barlow">
        <div className="w-[100px] h-[40px] flex justify-center items-center cursor-pointer rounded hover:bg-[#161e4a]">FEATURES</div>
        <div className="w-[5px] h-[5px] rounded bg-[#0652DD]"></div>
        <div className="w-[100px] h-[40px] flex justify-center items-center cursor-pointer rounded hover:bg-[#161e4a]">PRICING</div>
        <div
          style={{ fontFamily: "BlackOpsOne" }}
          className="flex items-end text-3xl cursor-pointer font-BlackOpsOne"
        >
          <img
            src="https://blog.al2p.xyz/upload/usailogo.png"
            className="w-[50px] mr-1"
            alt=""
          />
          SAI
        </div>
        <div className="w-[100px] h-[40px] flex justify-center items-center cursor-pointer rounded hover:bg-[#161e4a]">FAQ</div>
        <div className="w-[5px] h-[5px] rounded bg-[#0652DD]"></div>

        <div className="w-[100px] h-[40px] flex justify-center items-center cursor-pointer rounded hover:bg-[#161e4a]">DOWNLOAD</div>
      </div>
    </>
  );
}
