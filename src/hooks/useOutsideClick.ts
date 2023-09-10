import { useEffect, useRef, RefObject } from 'react';

type ClickHandler = (event: MouseEvent) => void;

export const useOutsideClick = (
  handler: ClickHandler,
  listenCapturing = true
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): RefObject<any> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler(e);
      }
    };

    document.addEventListener('click', handleClick, listenCapturing);

    return () =>
      document.removeEventListener('click', handleClick, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
};
