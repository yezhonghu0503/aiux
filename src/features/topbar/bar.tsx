import { useAppSelector } from "../../app/hooks";
import { selectCount } from "../counter/counterSlice";
import { RootState } from "../../app/store";

export function Bar() {
  const count = useAppSelector((state: RootState) => selectCount(state));
  return (
    <>
      <h1>{count}</h1>
    </>
  );
}
