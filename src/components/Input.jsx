import React,{ useEffect, useRef } from "react";

export default function Demo() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="tutorial">
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
}




