import React, { createContext, useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import styled from 'styled-components';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { PropsWithChildren } from '../utils/types.ts';

interface MenusContextType {
  openId: string;
  close: () => void;
  position: { x: number; y: number } | null;
  open: (id: string) => void;
  setPosition: (position: { x: number; y: number } | null) => void;
}

interface ListProps {
  position: {
    x: number;
    y: number;
  } | null;
}

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul<ListProps>`
  position: fixed;

  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props?.position?.x}px;
  top: ${(props) => props?.position?.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const initialMenusContextValue: MenusContextType = {
  openId: '',
  close: () => {},
  position: null,
  open: () => {},
  setPosition: () => {},
};

const MenusContext = createContext(initialMenusContextValue);

const Menus = ({ children }: { children: PropsWithChildren<React.JSX.Element | React.JSX.Element[]> }) => {
  const [openId, setOpenId] = useState('');
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  const close = () => setOpenId('');
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ openId, close, open, position, setPosition }}>{children}</MenusContext.Provider>
  );
};

const Toggle = ({ id }: { id: string | number }) => {
  const { openId, close, open, setPosition } = useContext<MenusContextType>(MenusContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    const targetElement = e.target as Element;
    const closestButton = targetElement.closest('button');

    if (closestButton) {
      const rect = closestButton.getBoundingClientRect();
      setPosition({
        x: window.innerWidth - rect.width - rect.x,
        y: rect.y + rect.height + 8,
      });

      openId === '' || openId !== id ? open(String(id)) : close();
    }
  };

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
};

const List = ({
  id,
  children,
}: {
  id: string | number;
  children: PropsWithChildren<React.JSX.Element | React.JSX.Element[]>;
}) => {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close, false);

  if (+openId !== +id) return null;

  return createPortal(
    <StyledList position={position} ref={ref}>
      {children}
    </StyledList>,
    document.body,
  );
};

const Button = ({
  children,
  icon,
  onClick,
}: {
  children: PropsWithChildren<string>;
  icon?: React.JSX.Element;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const { close } = useContext(MenusContext);

  const handleClick = () => {
    onClick?.();
    close();
  };

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
};

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
