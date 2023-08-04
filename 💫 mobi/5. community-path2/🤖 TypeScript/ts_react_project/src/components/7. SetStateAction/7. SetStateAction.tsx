import React, { useState } from "react";
import Modal from "./container";

const ContentBox: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div>CONTENTS,,,</div>
      {isModalOpen ? (
        <Modal setIsModalOpen={setIsModalOpen} />
      ) : (
        <div>
          <button>모달 열기</button>
        </div>
      )}
    </>
  );
};

export default ContentBox;
