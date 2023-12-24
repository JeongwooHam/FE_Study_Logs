import { textAtom } from "../store/atoms";
import { useRecoilState } from "recoil";

const useAtomState = () => {
  const [text, setText] = useRecoilState(textAtom);

  return { text, setText };
};

export default useAtomState;
