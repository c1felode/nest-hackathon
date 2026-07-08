# Nest Hackathon Backend

A secure, production-ready backend built with **NestJS 11** and **Express adapter**, featuring integrated rate-limiting and DDoS protection via Arcjet.

## Overview

This project provides a foundational backend architecture for hackathon applications, demonstrating NestJS best practices including:

- **Modular architecture** with feature modules and global infrastructure services
- **Security-first approach** with Arcjet rate-limiting and bot detection
- **ES Modules support** with modern TypeScript (ES2023 target)
- **Express integration** via `@nestjs/platform-express`
- **Configuration management** via environment variables

## Tech Stack

- **Runtime**: Node.js with ES Modules
- **Framework**: NestJS 11.0+
- **Adapter**: Express
- **Language**: TypeScript 5.7+
- **Security**: Arcjet 1.8+ (rate-limiting, bot detection, attack prevention)
- **Testing**: Jest with ts-jest
- **Code Quality**: ESLint + Prettier

## Project Structure

```
src/
├── app.controller.ts        # Main HTTP controller (root route)
├── app.module.ts            # Root application module
├── app.service.ts           # Root application service
├── main.ts                  # Bootstrap entry point
└── lib/
    └── arcjet/              # Global security infrastructure
        ├── arcjet.module.ts # Arcjet module (@Global)
        └── arcjet.service.ts # Configuration factory
```

## Getting Started

### Prerequisites

- Node.js 18+ (with ES Modules support)
- npm or yarn

### Installation

```bash
npm install
```

### Environment Configuration

Create a `.env` file in the project root:

```env
PORT=3000
# Add Arcjet configuration variables as needed
```

### Development

```bash
# Watch mode
npm run start:dev

# Debug mode
npm run start:debug

# Production build
npm run build
```

### Running

```bash
# Development
npm start

# Production
npm run start:prod
```

## Scripts

| Command | Purpose |
|---------|---------|
| `npm start` | Start the application |
| `npm run start:dev` | Start with file watch |
| `npm run start:debug` | Debug mode with watch |
| `npm run start:prod` | Run compiled production build |
| `npm run build` | Compile TypeScript to dist/ |
| `npm run format` | Format code with Prettier |
| `npm run lint` | Lint and fix with ESLint |
| `npm test` | Run unit tests |
| `npm run test:watch` | Tests in watch mode |
| `npm run test:cov` | Generate coverage report |
| `npm run test:e2e` | Run end-to-end tests |

## Architecture

### Global Modules

**ArcjetSecurityModule** (`src/lib/arcjet/`)
- Marks as `@Global()` to be imported once in AppModule
- Provides app-wide rate-limiting, bot detection, and DDoS protection
- Configured via `ArcjetConfigService`
- Applied as an APP_GUARD to all routes

### Feature Modules

Follow the pattern `src/modules/<feature-name>/` for new features:

```bash
nest g module modules/auth
nest g service modules/auth
nest g controller modules/auth
```

## NestJS Best Practices Applied

✅ **Constructor Injection Only** — No manual service instantiation  
✅ **Global Infrastructure Modules** — Arcjet configured as @Global()  
✅ **Separate Module/Service/Controller** — Generated via Nest CLI  
✅ **Environment Configuration** — ConfigModule.forRoot() at module boundaries  
✅ **ES Modules** — ESM imports with `.js` extensions  
✅ **Compiled Output** — `dist/` directory for production

## Testing

Run the test suite:

```bash
npm test
```

Tests are located alongside source files with `.spec.ts` suffix. Configuration in `package.json` (unit tests) and `test/jest-e2e.json` (end-to-end tests).

## Building for Production

```bash
npm run build
npm run start:prod
```

The build outputs compiled JavaScript to `dist/`.

## Contributing

When adding new features:

1. Create feature modules in `src/modules/`
2. Use the Nest CLI for scaffolding
3. Follow constructor injection patterns
4. Add comprehensive tests
5. Format and lint before committing:
   ```bash
   npm run format && npm run lint
   ```

## License

UNLICENSED
