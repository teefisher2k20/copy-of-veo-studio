
# Copilot Instructions for Veo Studio

## Project Overview

- Veo Studio is a single-page React app (Vite + TypeScript) for generating videos using Google GenAI's Veo model. All API calls are made from the browser; there is no backend server.

## Architecture & Data Flow

- Entrypoint: `index.tsx` mounts `App.tsx`.
- UI Components: Located in `components/` (e.g., `PromptForm.tsx`, `VideoResult.tsx`).
- Service Layer: All GenAI SDK calls are centralized in `services/geminiService.ts`.
- Types: Shared request/response shapes and enums are defined in `types.ts`.
-- Data Flow:
  - User input via `PromptForm.tsx` → `App.tsx:handleGenerate()` → `services/geminiService.generateVideo(params)` → GenAI API.
  - Video results are rendered in `VideoResult.tsx`.

## Key Patterns & Conventions

- Types-First: All cross-component data structures are defined in `types.ts`. Always use these types for request/response payloads.
- Single Service Boundary: Only `services/geminiService.ts` interacts with the GenAI SDK. UI components should remain pure and only pass/receive typed params.
- Media Handling: File inputs are converted to base64 strings using `PromptForm.tsx:fileToBase64`.
- Error Handling: Centralized in `App.tsx` with user-friendly messages for model/key issues.
- Logging: Use `console.log` for tracing payloads, polling, and fetch URLs.

## Developer Workflows

- Local Development:
  - Install dependencies: `npm install`
  - Start dev server: `npm run dev`
  - Build: `npm run build`
  - Preview: `npm run preview`
  - Set API key in `.env.local` as `VITE_API_KEY` (or use Google AI Studio selection).
- CI/CD: Automated checks run on push/PR via GitHub Actions (`.github/workflows/ci.yml`):
  - Markdown lint (`npm run lint:md`)
  - ESLint (if config present)
  - Build
  - Tests (if `tests/` exists)
- Pre-push Hook: Husky runs lint, build, and tests before pushing (`.husky/pre-push`).

## Modes & Constraints

- Generation Modes: Defined in `types.ts:GenerationMode` (TEXT_TO_VIDEO, FRAMES_TO_VIDEO, REFERENCES_TO_VIDEO, EXTEND_VIDEO).
- Resolution Rules: 1080p videos cannot be extended; EXTEND requires 720p.
- References Mode: Requires at least one reference image and a prompt; aspect ratio fixed to 16:9.
- Frames Mode: Start frame required; end frame optional or use loop.

## Integration Points

- API Key: Prefer Google AI Studio embedding (`window.aistudio`); fallback to `VITE_API_KEY` in `.env.local`.
- External SDK: Uses `@google/genai` for all GenAI interactions.
- Metadata: App metadata in `metadata.json`.

## Extending the App

- To add new generation variants, update enums/types in `types.ts`, extend UI in `PromptForm.tsx`, and map new fields in `geminiService.ts`.
- For new UI flows (e.g., presets), keep param assembly in UI and convert to `GenerateVideoParams`.

## Troubleshooting

- "Requested entity was not found." usually means a bad model name or invalid API key.
- 1080p cannot be extended; UI disables Extend if last result wasn’t 720p.
- Final video fetch appends `&key=...`; ensure the same key is used throughout.

## Key Files

- `App.tsx` – state machine, error handling, and main flows.
- `components/PromptForm.tsx` – input UI, media handling, validation.
- `services/geminiService.ts` – GenAI SDK calls, polling, result fetch.
- `types.ts` – canonical enums and request shapes.
