import { useEffect } from "react";

const useClickOutside = (refs, handler, isOpen = false) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen) {
        const isOutside = refs.every(
          (ref) => ref.current && !ref.current.contains(event.target)
        );
        if (isOutside) {
          handler();
        }
      }
    };

    // 외부 클릭 감지를 위한 이벤트 리스너 등록
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [refs, handler, isOpen]);
};

export default useClickOutside;
