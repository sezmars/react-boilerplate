import React, { cloneElement, createContext, ReactElement, ReactNode, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { HiXMark } from 'react-icons/hi2';
import Button from './Button.tsx';
import { PropsWithChildren } from '../utils/types.ts';

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (opensWindowName: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const Modal = ({ children }: { children: ReactNode }) => {
  const [openName, setOpenName] = useState<string>('');

  const close = () => setOpenName('');
  const open = (opensWindowName: string) => setOpenName(opensWindowName);

  return <ModalContext.Provider value={{ openName, close, open }}>{children}</ModalContext.Provider>;
};

const Open = ({ children, opens: opensWindowName }: { opens: string; children: ReactNode }) => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error('Open component must be used within a ModalProvider');
  }

  const { open } = modalContext;

  return cloneElement(children as ReactElement, {
    onClick: () => open(opensWindowName),
  });
};

const Window = ({ children, name }: { name: string; children: PropsWithChildren<React.JSX.Element> }) => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error('The Window component is used to be used in the intermodal provider.');
  }

  const { openName, close } = modalContext;
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
