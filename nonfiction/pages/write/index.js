import styled from "styled-components";

const WritePage = () => {
  return (
    <>
      <Container>
        <h3>기업구매 문의하기</h3>
        <Lists>
          <li>
            <label>Subject</label>
            <select>
              <option>기업구매 문의하기</option>
            </select>
          </li>
          <li>
            <label>Name</label>
            <input />
          </li>
          <li>
            <label>E-mail</label>
            <input />
            <span>@</span>
            <input />
          </li>
          <li>
            <label>Content</label>
            <textarea placeholder="안녕하세요 :) 논픽션 입니다."></textarea>
          </li>
          <li>
            <label>Attachment</label>
            <button>파일 선택</button>
            <span>선택된 파일 없음</span>
          </li>
          <li>
            <label>Password</label>
            <input />
          </li>
          <li>
            <label>Captcha</label>
            <input placeholder="보안문자를 입력해주세요." />
          </li>
        </Lists>
        <div>
          <InquiryBtn>작성하기</InquiryBtn>
        </div>
      </Container>
    </>
  );
};

export default WritePage;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Lists = styled.ul`
  list-style: none;
  label {
    display: block;
    font-size: large;
  }
  select {
    width: 760px;
    height: 30px;
    background: transparent;
    border: 1px solid #000;
    padding: 7px;
    margin: 10px 0;
    font-size: 13px;
  }
  input {
    width: 150px;
    height: 30px;
    margin: 10px 0;
  }
  textarea {
    width: 760px;
    height: 440px;
  }
`;

const InquiryBtn = styled.button`
  background-color: #000;
  color: white;
  border: solid 1px #000;
  width: 300px;
  height: 42px;
`;
