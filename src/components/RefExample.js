import { useRef } from 'react';

export const RefExample = () => {
  const textareaRef = useRef(null);

  return (
    <>
      <button
        onClick={() => {
          const { top } = textareaRef.current.getBoundingClientRect();
          window.scrollTo({ top, behavior: 'smooth' });
        }}
      >
        START
      </button>
      <div style={{ margin: 500 }}></div>
      <textarea ref={textareaRef} cols="30" rows="10" />
    </>
  );
};
