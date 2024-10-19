# Dokeboard

Dokeboard is a minimalist, customizable dashboard for your homelab's self-hosted services.

## Quick Start

1. Clone the repository
2. Install dependencies: `bun install`
3. Run development server: `bun run dev`
4. Build for production: `bun run build`

## Configuration

Customize your dashboard by editing the `dokeboard.config.ts` file:

```typescript
const config: DokeboardConfig = {
  siteName: 'dokehouse',
  serviceGroups: [
    {
      name: 'Home',
      services: [
        {
          label: 'Home Assistant',
          icon: 'mdi:home-assistant',
          href: 'https://github.com/home-assistant/core',
        },
        {
          label: 'Nextcloud',
          icon: 'mdi:cloud',
          href: 'https://github.com/nextcloud',
        },
      ],
    },
    // ... more groups and services
  ],
}
```

## Tech stack

- [Vite](https://vitejs.dev/): Build tool
- [TypeScript](https://www.typescriptlang.org/): Language
- [Vue 3](https://vuejs.org/): JS framework
- [VueUse](https://vueuse.org/): Vue Composition utilities
- [Tailwind CSS](https://tailwindcss.com/): CSS framework
- [PostCSS](https://postcss.org/): CSS transformation tool
- [DaisyUI](https://daisyui.com/): UI component library
- [Iconify](https://iconify.design/): Icons
- [ESLint](https://eslint.org/): Linting and formatting

## License

MIT
