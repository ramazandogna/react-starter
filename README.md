# React Starter Template

Modern React uygulamaları için başlangıç şablonu. TypeScript, Redux Toolkit, React Router, UnoCSS ve daha fazlasını içerir.

## 🚀 Özellikler ve Teknoloji Yığını

- ⚡️ [Vite v5.0.0](https://vitejs.dev/) - Modern build tool
- ⚛️ [React v18.2.0](https://reactjs.org/) - JavaScript kütüphanesi
- 🎯 [TypeScript v5.3.3](https://www.typescriptlang.org/) - Tip güvenliği
- 📡 [Redux Toolkit v2.6.1](https://redux-toolkit.js.org/) - State yönetimi
- 🛣️ [React Router v6.20.0](https://reactrouter.com/) - Routing
- 🎨 [UnoCSS v0.58.0](https://unocss.dev/) - Atomic CSS engine
- 📱 [Framer Motion v10.16.0](https://www.framer.com/motion/) - Animasyonlar
- 🧪 [Vitest v1.6.1](https://vitest.dev/) - Unit ve entegrasyon testleri
- 🎭 [Testing Library v14.1.0](https://testing-library.com/) - React bileşen testleri
- 📝 [ESLint v8.56.0](https://eslint.org/) - Kod linting
- 💅 [Prettier v3.1.0](https://prettier.io/) - Kod formatlama
- 🌐 [Axios v1.8.2](https://axios-http.com/) - HTTP client

## 📁 Proje Yapısı

```
src/
├── api/          # API istekleri ve yapılandırması
├── assets/       # Statik dosyalar (görseller, fontlar)
├── components/   # Yeniden kullanılabilir UI bileşenleri
│   └── ui/      # Temel UI bileşenleri
├── features/     # Redux store ve slice'lar
├── hooks/        # Custom React hooks
├── layouts/      # Sayfa düzenleri
├── mocks/        # Mock veriler
├── pages/        # Sayfa bileşenleri
├── styles/       # Global stiller ve CSS reset
├── test/         # Test yapılandırması ve yardımcı fonksiyonlar
├── types/        # TypeScript tip tanımlamaları
└── utils/        # Yardımcı fonksiyonlar
```

## 🛠️ Kurulum

```bash
# Depoyu klonla
git clone https://github.com/kullanici/react-starter.git

# Dizine git
cd react-starter

# Bağımlılıkları yükle
pnpm install

# Geliştirme sunucusunu başlat
pnpm dev
```

## 📝 Kullanılabilir Komutlar

```bash
# Geliştirme sunucusunu başlat
pnpm dev

# Prodüksiyon için build al
pnpm build

# Testleri çalıştır
pnpm test

# Testleri izleme modunda çalıştır
pnpm test:watch

# Lint kontrolü yap
pnpm lint

# Kodu formatla
pnpm format

# Build önizlemesi
pnpm preview
```

## 🧪 Test Yapısı

Projede Vitest ve Testing Library kullanılarak kapsamlı test altyapısı kurulmuştur:

- `src/test/setup.ts`: Test ortamı yapılandırması
- `**/*.test.tsx`: Bileşen testleri
- Jest DOM matchers desteği
- React Testing Library yardımcı fonksiyonları

Örnek test:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import MyComponent from './MyComponent'

describe('MyComponent', () => {
  it('doğru şekilde render edilmeli', () => {
    render(<MyComponent />)
    expect(screen.getByText('Başlık')).toBeInTheDocument()
  })
})
```

## 🔧 Yapılandırma

### Environment Variables

`.env` dosyasında aşağıdaki değişkenleri tanımlayabilirsiniz:

```env
VITE_API_URL=http://api.example.com
```

### ESLint

ESLint yapılandırması `.eslintrc.cjs` dosyasında bulunur. TypeScript ve React kurallarını içerir:

- TypeScript desteği
- React Hooks kuralları
- Import/export kontrolleri
- Kullanılmayan değişken uyarıları

### TypeScript

TypeScript yapılandırması `tsconfig.json` ve `tsconfig.app.json` dosyalarında bulunur:

- Path aliases (`@/*`)
- Strict mod
- ESNext hedefi
- React JSX desteği

## 🚢 CI/CD

GitHub Actions ile otomatik derleme, test ve dağıtım yapılandırması:

```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Run linter
        run: pnpm lint

      - name: Run tests
        run: pnpm test

      - name: Build
        run: pnpm build

      - name: Upload build artifacts
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist
```

## 🧩 Bileşen Kullanımı

### Button Bileşeni

```tsx
import Button from '@/components/ui/Button'

function MyComponent() {
  return (
    <Button
      variant="primary"
      size="md"
      isLoading={false}
      onClick={() => console.log('Tıklandı!')}
    >
      Tıkla
    </Button>
  )
}
```

### Local Storage Hook

```tsx
import useLocalStorage from '@/hooks/useLocalStorage'

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'varsayılan değer')
  return <button onClick={() => setValue('yeni değer')}>Değer: {value}</button>
}
```

### Redux Store Kullanımı

```tsx
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/features/store/themeSlice'

function ThemeToggle() {
  const dispatch = useDispatch()
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {isDarkMode ? '🌞' : '🌙'}
    </button>
  )
}
```

## 📦 Dağıtım

1. Prodüksiyon build'i al:

```bash
pnpm build
```

2. `dist` klasöründeki dosyaları CDN veya statik hosting sağlayıcısına yükle.

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

MIT License - daha fazla detay için [LICENSE](LICENSE) dosyasına bakın.
