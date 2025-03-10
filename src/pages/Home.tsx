import { motion } from 'framer-motion'
import { useAnimationConfig } from '@/hooks/useAnimationConfig'
import FeatureCard from '@/components/ui/FeatureCard'

const HomePage = () => {
  const { pageTransition } = useAnimationConfig()

  const features = [
    {
      title: 'Modern Teknolojiler',
      description: 'React 18, TypeScript, Vite ve daha fazlası',
    },
    {
      title: 'Hazır Yapılandırma',
      description: 'ESLint, Prettier, ve CI/CD entegrasyonu',
    },
    {
      title: 'Performans Odaklı',
      description: 'Optimize edilmiş build ve geliştirme süreci',
    },
  ]

  return (
    <motion.div className="container mx-auto px-4 py-8" {...pageTransition}>
      <h1 className="mb-8 text-center text-4xl font-bold">
        React Starter Template
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default HomePage
