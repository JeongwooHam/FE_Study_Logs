import { useRef, useState } from "react";
import PlayListMock from "../../__mock__/playList.json";

function State1() {
  // console.log(PlayListMock.playlist);
  /* 데이터 콘솔에 찍어두었으니 확인해볼 것 */
  const [playList, setPlayList] = useState(PlayListMock.playlist);
  const titleVal = useRef("");
  const singerVal = useRef("");

  const onChangeTitleVal = (e) => {
    console.log(e.target.value);
    titleVal.current = e.target.value;
  };
  const onChangeSingerVal = (e) => {
    console.log(e.target.value);
    singerVal.current = e.target.value;
  };

  const handleAddPlaylist = () => {
    const newSong = {
      title: `${titleVal.current}`,
      singer: `${singerVal.current}`,
    };

    setPlayList([...playList, newSong]);
  };

  const handleRemovePlaylist = (id) => {
    console.log(id);
    const newPlayList = [...playList];
    setPlayList(newPlayList.filter((song) => newPlayList.indexOf(song) !== id));
  };

  // playList.forEach((song) => console.log(song));

  return (
    <>
      <h1>문제1</h1>
      <ul>
        {playList.map((el, i) => (
          <li key={i} name={i}>
            <h3>{el.title}</h3>
            <p>{el.singer}</p>
            <button
              onClick={() => {
                handleRemovePlaylist(i);
              }}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
      <div>
        <p>
          곡명 : <input name={"title"} onChange={onChangeTitleVal} />
        </p>
        <p>
          가수/작곡 : <input name={"singer"} onChange={onChangeSingerVal} />
        </p>
        <p>
          <button onClick={handleAddPlaylist}>추가</button>
        </p>
      </div>
    </>
  );
}
export default State1;
