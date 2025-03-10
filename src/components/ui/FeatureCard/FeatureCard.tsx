import { motion } from 'framer-motion'
import { useAnimationConfig } from '@/hooks/useAnimationConfig'

interface FeatureCardProps {
  title: string
  description: string
}

const FeatureCard = ({ title, description }: FeatureCardProps) => {
  const { hoverScale } = useAnimationConfig()

  return (
    <motion.div
      whileHover={hoverScale}
      className="rounded-lg bg-white p-6 shadow-md"
    >
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default FeatureCard
