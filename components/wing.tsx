"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Wings: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, }); 
  // threshold can be adjusted to trigger earlier or later

  return (
    <div className="relative h-[580px] my-[-140px] " ref={ref}>
      <motion.img
        src="/wing.png"
        alt="Wings"
        className="h-[560px] object-contain origin-bottom-left"
        style={{ filter: "drop-shadow(50px 10px 20px rgba(0,0,0,1))" }}
        initial={{ rotate: 90, scale: 0, opacity: 0 }}
        animate={
          isInView
            ? { rotate: 0, scale: 1, opacity: 1 }
            : { rotate: 90, scale: 0, opacity: 0 }
        }
        transition={{
          duration: 1,
          ease: "easeOut",
          type: "spring",
          stiffness: 80,
          damping: 12,
        }}
      />
    </div>
  );
};

export default Wings;








// "use client";

// import React, { useRef } from "react";
// import { motion, useInView } from "framer-motion";

// const Wings: React.FC = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, });
//   // threshold 0.3 = triggers when 30% visible

//   return (
//     <div className="relative" ref={ref}>
//       <motion.img
//         src="/wing.png"
//         alt="Wings"
//         className="h-[580px] object-contain origin-bottom-left"
//         initial={{ rotate: 90, scale: 0, opacity: 0 }}
//         animate={
//           isInView
//             ? { rotate: 0, scale: 1, opacity: 1 }
//             : { rotate: 90, scale: 0, opacity: 0 }
//         }
//         transition={{
//           duration: 1,
//           ease: "easeOut",
//           type: "spring",
//           stiffness: 80,
//           damping: 12,
//         }}
//       />
//     </div>
//   );
// };

// export default Wings;
