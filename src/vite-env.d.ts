/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_LOCAL_STORAGE_PATH?: string;
  readonly VITE_OFFLINE_MODE?: string;
  readonly VITE_USE_LOCAL_DB?: string;
  readonly VITE_MAX_CONCURRENT_GENERATIONS?: string;
  readonly VITE_ENABLE_GPU_ACCELERATION?: string;
  readonly VITE_DEV_PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {
  aistudio?: {
    hasSelectedApiKey(): Promise<boolean>;
    openSelectKey(): Promise<void>;
  };
}
