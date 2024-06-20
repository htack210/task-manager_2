"use client";
import styled from "styled-components";
import { useGlobalState } from "../../context/globalProvider";
import React from "react";

interface Props {
  content: React.ReactNode;
}

function ModalEdit({ content }: Props) {
  console.log("Ye olde content: ", content);
  const { closeModalEdit } = useGlobalState();
  return (
    <ModalEditStyled>
      <div className="modal-overlay" onClick={closeModalEdit}></div>
      <div className="modal-content">{content}</div>;
    </ModalEditStyled>
  );
}

const ModalEditStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  .modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    // background-color: rgba(0, 0, 0, 0);
    filter: blur(4px);
  }

  .modal-content {
    // margin: 0 1rem;

    // padding: 2rem;
    position: relative;
    max-width: 20%;
    // width: 100%;
    z-index: 100;

    border-radius: 1rem;
    // background-color: ${(props) => props.theme.colorBg2};
    // box-shadow: 0 0 1rem rgba(0, 0, 0, 0.3);
    // border-radius: ${(props) => props.theme.borderRadiusMd2};

    @media screen and (max-width: 450px) {
      font-size: 90%;
    }
  }
`;

export default ModalEdit;
