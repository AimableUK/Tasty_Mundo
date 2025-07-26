import { useEffect } from "react";

function useClickOutside(ref, isOpen, onClose) {
  useEffect(() => {
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, isOpen, onClose]);
}

export default useClickOutside;
