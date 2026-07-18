import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const showCursor = () => setVisible(true);
    const hideCursor = () => setVisible(false);

    const section = document.getElementById('cursor-section');

    if (section) {
      section.addEventListener('mouseenter', showCursor);
      section.addEventListener('mouseleave', hideCursor);
      section.addEventListener('mousemove', moveCursor);
    }

    return () => {
      if (section) {
        section.removeEventListener('mouseenter', showCursor);
        section.removeEventListener('mouseleave', hideCursor);
        section.removeEventListener('mousemove', moveCursor);
      }
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 left-0 z-50 transition-transform duration-75 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: `translate(${position.x - 25}px, ${position.y - 25}px)`,
      }}
    >
      <div className="w-12 h-12 rounded-full bg-white/30 border border-white" />
    </div>
  );
};

export default CustomCursor;
