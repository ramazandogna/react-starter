import { useMemo } from 'react'

export const useAnimationConfig = () => {
  const config = useMemo(
    () => ({
      // Hover animasyonları
      hoverScale: { scale: 1.05 },
      hoverElevate: { y: -5 },

      // Sayfa geçiş animasyonları
      pageTransition: {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.3 },
      },

      // Liste item animasyonları
      listItem: {
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.2 },
      },
    }),
    []
  )

  return config
}
