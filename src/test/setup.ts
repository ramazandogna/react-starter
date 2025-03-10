import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Testing Library'nin matchers'larını extend et
expect.extend(matchers)

// Her testten sonra DOM'u temizle
afterEach(() => {
  cleanup()
})
