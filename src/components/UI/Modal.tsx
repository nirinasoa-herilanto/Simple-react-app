import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import Overlay from './Overlay/Overlay';
import { useAppStore } from '@project/store';
import Portal from '../Portal';

interface ModalProps {
  classname?: boolean;
  heightModal?: boolean;
  children: ReactNode | ReactNode[];
  fn: () => void;
}

const modalRoot = document.getElementById('modal-root') as HTMLElement;

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
  const { isDark, isModalOpen } = useAppStore();

  return (
    <Portal markupTo={modalRoot}>
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
        <Overlay isDarkMode={isDark} onClick={isModalOpen} />
      </ModalWrapper>
    </Portal>
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

      background: ${({ theme }: any) => theme.bg};
      z-index: 25;
    }

    .modal__content--height {
      height: auto;
    }

    .modal__btn {
      top: 10px;
      right: 20px;
      position: absolute;
    }

    .overlay {
      top: 0;
      width: 100%;
      height: 100%;
      position: absolute;

      background: ${({ theme }) => theme.overlay};
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
