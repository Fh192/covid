import { RefObject, useEffect } from 'react';

export const useOnScroll = <T extends RefObject<HTMLElement>>(
  ref: T,
  condition: boolean,
  callback: () => void,
) => {
  useEffect(() => {
    const el = ref.current;

    if (!el) return undefined;

    const listener = () => {
      const { scrollHeight, scrollTop, offsetHeight } = el;

      if (!condition) return undefined;
      if (scrollTop + offsetHeight >= scrollHeight - 100) callback();
    };

    el.addEventListener('scroll', listener);
    return () => el.removeEventListener('scroll', listener);
  }, [ref, condition, callback]);
};
