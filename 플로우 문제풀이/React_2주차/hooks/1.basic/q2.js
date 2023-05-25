import { useRef, useState } from "react";

function Q2() {
  // 문제 2-1
  const arr = useRef([]);
  const inputVal = useRef("");
  const [forceRender, setForceRender] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [content, setContent] = useState([]);

  const onChangeInput = (e) => {
    inputVal.current = e.target.value;
  };

  const onAddList = () => {
    setForceRender((prev) => !prev);
    if (inputVal.current) {
      arr.current = [...arr.current, inputVal.current];
    }
    console.log(arr.current);
  };

  // useEffect(() => {
  //   console.log("rendered");
  // }, [forceRender]);

  const handleList = () => {
    setIsSubmit(true);
    setContent([...arr.current]);
    // setIsSubmit(false);
  };

  // 문제 2-2
  const colorArr = [
    "skyblue",
    "salmon",
    "CadetBlue",
    "CornflowerBlue",
    "Bisque",
    "DarkSalmon",
  ];
  const [index, setIndex] = useState(0);
  const HtmlofP = useRef(null);

  const onColorChange = () => {
    HtmlofP.current.style.color = colorArr[index];
    setIndex(index + 1);
  };

  return (
    <>
      <h1>문제2</h1>
      <div>
        <h2>문제 2-1</h2>
        <p>
          <input onChange={onChangeInput} />
        </p>
        <p>
          <button onClick={onAddList}>추가</button>
        </p>
        <p>
          <button onClick={handleList}>제출</button>
        </p>
        {isSubmit &&
          (content.length === 0 ? (
            <p>제출된 목록이 없습니다.</p>
          ) : (
            <ul>
              {content.map((el, i) => (
                <li key={i}> {el} </li>
              ))}
            </ul>
          ))}
      </div>
      <div>
        <h2>문제 2-2</h2>
        <p ref={HtmlofP}> 이 문구는 아래 버튼을 누르면 색상이 바뀝니다</p>
        <button onClick={onColorChange}>변경</button>
      </div>
    </>
  );
}
export default Q2;
