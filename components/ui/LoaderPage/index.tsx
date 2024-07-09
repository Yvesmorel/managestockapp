"use client"
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const LoaderPageAnimation = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!pathname) return;

    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Simulate loading duration

    return () => clearTimeout(timer);
  }, [pathname]);

  return loading ? <BottomAnimation loading={loading} /> : null;
};

const BottomAnimation = ({ loading }: { loading: boolean }) => {
  return (
    <div
      style={loading ? { zIndex: 10 } : {}}
      className="flex shadow-sm loader-animation bg-[#000] shadow-xl w-auto h-auto p-1 rounded fixed right-10 bottom-10"
    >
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
  );
};

export default LoaderPageAnimation;
