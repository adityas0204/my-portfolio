import { useEffect, useRef } from "react"
import pingService from '../services/ping'

const useScrollTracking = (componentName) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            pingService.updateLog({
              type: "MILESTONE",
              milestone: componentName
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [componentName])

  return elementRef
}

export default useScrollTracking