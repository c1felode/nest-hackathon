# Memory - Arcjet Global Protection Setup

Last updated: 2026-07-08 00:00 Asia/Tashkent

## What was built

Created a new Arcjet site named `nest-hackathon` and configured this NestJS app to use it. Installed `@arcjet/nest` and `@nestjs/config`. Added `src/lib/arcjet/arcjet.module.ts` and `src/lib/arcjet/arcjet.service.ts`, imported `ArcjetSecurityModule` in `src/app.module.ts`, and updated local imports for ESM compatibility. Added the Arcjet site key to ignored `.env`.

## Decisions made

Arcjet is configured as a global infrastructure module following project conventions. The app uses `APP_GUARD` with Arcjet's `ArcjetGuard` so protection runs globally. Global rules are Shield WAF in `LIVE` mode and fixed-window rate limiting in `LIVE` mode at 100 requests per 60 seconds. `fixedWindow` was chosen because it works cleanly with the global guard, unlike token bucket which needs a per-route `requested` value.

## Problems solved

Arcjet's Nest SDK is ESM-only, so `package.json` now has `"type": "module"` and TypeScript relative imports use `.js` extensions. Local runtime uses Node v24.18.0, satisfying Arcjet's Node 22.21.0+ requirement.

## Current state

`npm run build` passes. A runtime smoke test started `node dist/main.js` and `GET /` returned `200` with `Hello World!`. `.env` contains `ARCJET_KEY` but the key is not stored in memory.

## Next session starts with

Optionally tune the global rate limit for the product's expected traffic, then add route-specific Arcjet rules for sensitive endpoints such as auth, signup, or AI actions.

## Open questions

Should the global rate limit stay at 100 requests per minute, or should it be adjusted for hackathon demo traffic?
