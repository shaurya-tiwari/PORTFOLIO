"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Wings: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, });
  // threshold can be adjusted to trigger earlier or later

  return (
    <div className="relative h-[600px] sm:h-[750px] md:h-[750px] lg:h-[850px] mt-[-150px] sm:mt-[-200px] md:mt-[-350px] lg:mt-[-450px] mb-[-80px] md:mb-[-150px] lg:mb-[-200px] flex justify-center z-50 pointer-events-none opacity-60" ref={ref}>
      <motion.img
        src="/wing.png"
        alt="Wings"
        id="wing-repeller"
        className="h-full object-contain origin-bottom"
        // style={{ filter: "drop-shadow(0 15px 15px rgba(0, 0, 0, 10)) drop-shadow(0 30px 60px rgba(0,0,0,0.8))" }}
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
