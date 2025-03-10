import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import FeatureCard from './FeatureCard'

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.HTMLProps<HTMLDivElement>) => (
      <div {...props}>{children}</div>
    ),
  },
}))

// Mock useAnimationConfig hook
vi.mock('@/hooks/useAnimationConfig', () => ({
  useAnimationConfig: () => ({
    hoverScale: { scale: 1.05 },
  }),
}))

describe('FeatureCard', () => {
  it('başlık içerisinde "test" kelimesi olmalı', () => {
    render(
      <FeatureCard title="Test Başlığı" description="Herhangi bir açıklama" />
    )

    const titleElement = screen.getByText(/test/i)
    expect(titleElement).toBeInTheDocument()
  })
})
