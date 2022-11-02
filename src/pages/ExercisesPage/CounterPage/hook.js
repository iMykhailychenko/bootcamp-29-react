import { useCallback, useState } from 'react';

export const useCounter = () => {
  const [android, setAndroid] = useState(0);
  const [iphone, setIphone] = useState(0);

  const handleUpdate = useCallback(event => {
    const { name } = event.target;

    switch (name) {
      case 'android':
        setAndroid(prev => prev + 1);
        break;

      case 'iphone':
        setIphone(prev => prev + 1);
        break;

      default:
        throw new Error();
    }
  }, []);

  return { android, iphone, handleUpdate };
};
