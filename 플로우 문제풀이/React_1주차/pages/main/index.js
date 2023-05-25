import Time from "../../components/Hooks 예습/1. useState_1";
import UploadText from "../../components/Hooks 예습/1. useState_2";
import CountState, {
  CountVariable,
} from "../../components/Hooks 예습/2. useRef_1";
import FamilyWithMemo, {
  FamilyWithCallback,
} from "../../components/Hooks 예습/5. ReactMemo_2";
import Family from "../../components/Hooks 예습/5. ReactMemo_1";
import MakeBoxChange from "../../components/Hooks 예습/4. useCallback_2";
import CallCallbackFunc from "../../components/Hooks 예습/4. useCallback_1";
import Questions from "../../components/Hooks 예습/3. useMemo_2";
import Calculator from "../../components/Hooks 예습/3. useMemo_1";
import TimerWithUseEffect from "../../components/Hooks 예습/6. useEffect_2";
import CountWithUseEffect from "../../components/Hooks 예습/6. useEffect_1";

const MainPage = () => {
  return (
    <>
      <h1>useState</h1>
      <Time />
      <hr />
      <UploadText />
      <hr />
      <h1>useRef</h1>
      <CountState />
      <CountVariable />
      <hr />
      <hr />
      <h1>uesEffect</h1>
      <CountWithUseEffect />
      <TimerWithUseEffect />
      <hr />
      <h1>useMemo</h1>
      <Calculator />
      <hr />
      <Questions />
      <hr />
      <h1>useCallback</h1>
      <CallCallbackFunc />
      <hr />
      <MakeBoxChange />
      <hr />
      <h1>React.memo</h1>
      <Family />
      <hr />
      <FamilyWithMemo />
      <hr />
      <FamilyWithCallback />
    </>
  );
};

export default MainPage;
