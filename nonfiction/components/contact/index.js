import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fontFamily } from "../../style/common";

const Contact = () => {
  return (
    <>
      <div className="title">
        <S.Title>CONTACT</S.Title>
      </div>
      <S.Container>
        <div className="section">
          <div className="main-img">
            <S.Image alt="item" src="img/nonfiction-item.jpg" />
          </div>
          <div className="main-text">
            <p>
              <div className="customer-service">
                COMSTOMER SURVICE <br />
                PM 13:30 - 17:30 (MON - FRI) <br />
                BREAK TIME <br />
                PM 12:00 - 13:30 <br />
                +82 1666-7891
                <br />
                <br />
              </div>
              <br />
              <br />
              고객문의, 입점문의 <br />
              hello@nonfiction.com <br />
              제휴문의 <br />
              press@nonfiction.com <br />
              <br /> <br />
            </p>
            <S.Button>
              <Link
                to="/WholeSale"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                기업구매 문의하기
              </Link>
            </S.Button>
          </div>
        </div>
      </S.Container>
    </>
  );
};

export default Contact;

const Title = styled.h3`
  ${fontFamily}
  text-align: center;
`;

const Image = styled.img`
  width: 432px;
  height: 466px;
  margin-right: 50px;
`;

const Container = styled.div`
  .section {
    display: flex;
    justify-content: center;
  }

  .customer-service {
    font-size: 12px;
    border-bottom: solid 1px;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 43px;
  background-color: #000000;
  color: #ffffff;
  font-size: 14px;
`;

const S = {
  Title,
  Image,
  Container,
  Button,
};
