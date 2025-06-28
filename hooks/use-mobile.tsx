"use client"

import { useState, useEffect } from "react"

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)
    // Check if the window is already in mobile view
      return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Return false during SSR to match server rendering
  return isClient ? isMobile : false
}










// "use client"

// import { useState, useEffect } from "react"

// export function useMobile() {
//   const [isMobile, setIsMobile] = useState(false)

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768)
//     }

//     // Initial check
//     checkIfMobile()

//     // Add event listener
//     window.addEventListener("resize", checkIfMobile)

//     // Clean up
//     return () => window.removeEventListener("resize", checkIfMobile)
//   }, [])

//   return isMobile
// }
