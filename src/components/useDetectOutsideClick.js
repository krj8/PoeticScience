// import { useState, useEffect } from 'react';


// /**
//  * Hook for handling closing when clicking outside of an element
//  * @param {React.node} el
//  * @param {boolean} initialState
//  */
// export const useDetectOutsideClick = (el, initialState) => {
//   const [isActive, setIsActive] = useState(initialState);

//   useEffect(() => {
//     const pageClickEvent = (e) => {
//       // If the active element exists and is clicked outside of
//       if (el.current !== null && !el.current.contains(e.target)) {
//         setIsActive(!isActive);
//       }
//     };

//     // If the item is active (ie open) then listen for clicks
//     if (isActive) {
//       window.addEventListener('click', pageClickEvent);
//     }

//     return () => {
//       window.removeEventListener('click', pageClickEvent);
//     }

//   };
  
//   return [isActive, setIsActive];
// }

import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = e => {
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
