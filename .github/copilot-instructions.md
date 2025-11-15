## Veo Studio – AI Agent Working Notes

- Purpose: Single-page React app (Vite + TS) that calls Google GenAI Veo video generation. No server; all calls are from the browser.
- Entrypoints: `index.tsx` mounts `App.tsx`. UI components in `components/`. API wrapper in `services/geminiService.ts`. Shared types in `types.ts`.

### Architecture & Data Flow
- UI form: `components/PromptForm.tsx` builds `GenerateVideoParams` with mode-specific media inputs.
- Generate: `App.handleGenerate()` → `services/geminiService.generateVideo(params)`.
- API: `@google/genai` → `models.generateVideos(payload)`; poll with `operations.getVideosOperation()` until `done`.
- Result: Fetch the generated video URI, create `Blob`/`objectUrl`, then render via `components/VideoResult.tsx`.
- Extend flow: After success, `onExtend` passes the prior `Video` object back into params (requires 720p).

### Modes, Constraints, and Payload Rules
- Modes (`types.ts: GenerationMode`): TEXT_TO_VIDEO, FRAMES_TO_VIDEO, REFERENCES_TO_VIDEO, EXTEND_VIDEO.
- Resolution: 1080p videos can’t be extended; EXTEND requires 720p (`App.tsx`, `PromptForm.tsx`).
- Aspect Ratio: Not used for EXTEND; fixed to 16:9 for References mode.
- References: At least one reference image + a prompt; optional style image (currently commented in UI).
- Frames: Start frame required; optional end frame or enable loop (uses start as end).

### API & Auth Integration
- Library: `@google/genai` (see `services/geminiService.ts`).
- Key handling: Prefer Google AI Studio embedding via `window.aistudio` (see `App.tsx`).
  - On load, `window.aistudio.hasSelectedApiKey()` gates usage; a dialog prompts selection when no key and no `VITE_API_KEY`.
  - Service uses `import.meta.env.VITE_API_KEY` for both API client and final asset fetch (`...&key=VITE_API_KEY`) when not using AI Studio selection.
- Local/dev: Set `VITE_API_KEY` in `.env.local` for `vite` dev/preview/build.

### Project Conventions
- Types-first: All cross-component request/response shapes live in `types.ts`.
- Single service boundary: Only `services/geminiService.ts` touches the GenAI SDK. Keep UI pure; pass `GenerateVideoParams` down.
- Media handling: File inputs are converted to base64 by splitting `data:` URLs (see `PromptForm.tsx:fileToBase64`).
- Error UX: Centralized in `App.tsx` with friendly messages for “model not found”, invalid key, or permission issues.
- Logging: Verbose `console.log` traces the payload, polling, and fetch URL for easier debugging.

### Build, Run, and Environment
- Commands: `npm install` → `npm run dev` (Vite) → `npm run build` → `npm run preview`.
- Required env: API key via AI Studio selection or `VITE_API_KEY` at build time.
- Files to check: `.env.local`, `README.md` for quick start; `metadata.json` for AI Studio app metadata.

### Extending the App (Examples)
- New generation variants: Add enum/fields in `types.ts`, extend `PromptForm` UI/validation, then map into the payload in `geminiService.generateVideo`.
- New UI flows (e.g., presets): Keep param assembly in UI; do not couple UI state to SDK types directly—convert to `GenerateVideoParams`.
- Auth alternatives: If removing `window.aistudio`, replace API key flow and update both client init and final fetch query param.

### Gotchas & Troubleshooting
- “Requested entity was not found.” often indicates bad model name or a key without access; check `VeoModel` values and key permissions.
- 1080p cannot be extended—UI disables Extend if last result wasn’t 720p.
- References mode forces model to `VEO` and 16:9, and requires at least one image and a prompt.
- Final video fetch appends `&key=...`; ensure the same key used to initiate the operation is available in the browser.

### Key Files
- `App.tsx` – state machine and flows (idle/loading/success/error, extend/retry).
- `components/PromptForm.tsx` – inputs, media handling, validation, and mode rules.
- `services/geminiService.ts` – SDK calls, polling, and result fetch.
- `types.ts` – canonical enums and request shapes used across the app.
