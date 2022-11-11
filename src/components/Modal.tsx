import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

interface ModalProps {
  classname?: boolean;
  heightModal?: boolean;
  children: ReactNode | ReactNode[];
  fn: () => void;
}

/**
 * Modal component
 * @params heightModal    use to modify height of modal style to "auto", by default it's false
 */
const Modal: React.FC<ModalProps> = ({
  children,
  classname,
  heightModal = false,
  fn,
}) => {
  return (
    <ModalWrapper className={`modal ${classname || ''}`}>
      <div
        className={`modal__content ${
          heightModal ? 'modal__content--height' : ''
        }`}
      >
        <FaTimes
          className="modal__btn"
          size={24}
          cursor="pointer"
          color="#dc2626"
          onClick={fn}
        />
        {children}
      </div>
      <div className="overlay" onClick={fn}></div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  &.modal {
    top: 0;
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: fixed;
    transition: all 0.5s;
    z-index: 20;

    .modal__content {
      width: 75%;
      height: 75%;

      padding: 20px 12px;

      overflow: auto;
      position: relative;

      background: var(--white);
      z-index: 25;
    }

    .modal__content--height {
      height: auto;
    }

    .modal__btn {
      right: 20px;
      position: absolute;
    }

    .overlay {
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;

      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(3px);
      transition: all 0.5s;
    }

    /* Scroll bar */
    .modal__content::-webkit-scrollbar {
      width: 12px;
    }

    .modal__content::-webkit-scrollbar-track {
      background: #eff6ff;
    }

    .modal__content::-webkit-scrollbar-thumb {
      background-color: #2563eb;
      border-radius: 10px;
    }
  }
`;

export default Modal;
