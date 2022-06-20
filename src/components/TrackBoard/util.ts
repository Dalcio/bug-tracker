import { useState, useEffect } from 'react';

export const useResize = () => {
  const [width, setWeight] = useState<string>('');

  useEffect(() => {
    if (width.length <= 0) {
      const width = window.innerWidth / 4;
      setWeight(`${width}px`);
    }
  }, [width]);

  useEffect(() => {
    const resize = () => {
      const width = window.innerWidth / 4;
      setWeight(`${width}px`);
    };

    window.addEventListener('resize', resize);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return { width };
};
