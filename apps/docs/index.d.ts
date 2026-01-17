declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENV: string;
      NEXT_PUBLIC_DOMAIN?: string;
      GH_ACCESS_TOKEN: string;
    }
  }
  interface Window {
    // Can be undefined if the Plausible script hasn't loaded or is blocked
    plausible?: Plausible;
  }
}

type Plausible = (eventName: string, context?: { props?: unknown; callback?: () => void }) => void;

export {};
