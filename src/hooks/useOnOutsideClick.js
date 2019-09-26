import { useEffect } from "react";

export const useOnOutsideClick = (onOutsideClick, innerRef) => {
  useEffect(() => {
    if (innerRef.current) {
      document.addEventListener("click", handleClick);
    }
    return () => document.removeEventListener("click", handleClick);

    function handleClick(e) {
      !innerRef.current.contains(e.target) && onOutsideClick(e);
    }
  }, [onOutsideClick, innerRef]);
};
