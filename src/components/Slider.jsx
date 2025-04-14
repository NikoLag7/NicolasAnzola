import { useEffect, useState } from 'react';

export default function Slider({ items, delay = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, delay);

    return () => clearInterval(interval);
  }, [items.length, delay]);

  return (
    <div className="flex flex-col items-center gap-4 ">
        
        <img src={items[index]} alt={items[index]} className=" max-h-80 object-contain " />
    </div>
  );
}