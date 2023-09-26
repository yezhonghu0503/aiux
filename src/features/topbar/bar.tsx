import { useAppSelector } from "../../app/hooks";
import { selectCount } from "../counter/counterSlice";
import { RootState } from "../../app/store";

export function Bar() {
  const count = useAppSelector((state: RootState) => selectCount(state));
  return (
    <>
      <div className="w-[100%] flex justify-between pl-[10%] pr-[10%]">
        <div>FEATURES</div>
        <div>·</div>
        <div>PRICING</div>
        <div>
          <img
            className="w-[50px]"
            src="https://blog.al2p.xyz/upload/uslogo.png"
            alt=""
          />
        </div>
        <div>FAQ</div>
        <div>·</div>
        <div>DOWNLOAD</div>
      </div>
    </>
  );
}
