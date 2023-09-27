export function Bar() {
  return (
    <>
      <div className="w-[100%] h-[80px] flex justify-between items-center pl-[15%] pr-[15%]">
        <div>FEATURES</div>
        <div className="w-[5px] h-[5px] rounded bg-[#0652DD]"></div>
        <div>PRICING</div>
        <div
          style={{ fontFamily: "BlackOpsOne" }}
          className="flex items-end text-3xl font-BlackOpsOne"
        >
          <img
            src="https://blog.al2p.xyz/upload/usailogo.png"
            className="w-[50px] mr-1"
            alt=""
          />
          SAI
        </div>
        <div>FAQ</div>
        <div className="w-[5px] h-[5px] rounded bg-[#0652DD]"></div>

        <div>DOWNLOAD</div>
      </div>
    </>
  );
}
