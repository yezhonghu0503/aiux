import { useAppSelector } from "../../app/hooks";
import { selectCount } from "../counter/counterSlice";
import { RootState } from "../../app/store";

export function Bar() {
  const count = useAppSelector((state: RootState) => selectCount(state));
  return (
    <>
      <div className="w-[100%] flex justify-between items-center pl-[15%] pr-[15%]">
        <div>FEATURES</div>
        <div className="w-[5px] h-[5px] rounded bg-[#0652DD]"></div>
        <div>PRICING</div>
        <div className=''>
          <img src='https://blog.al2p.xyz/upload/uslogo.png' className="w-[70px]" alt="" />
        </div>
        <div>FAQ</div>
        <div className="w-[5px] h-[5px] rounded bg-[#0652DD]"></div>

        <div>DOWNLOAD</div>
      </div>
    </>
  );
}
