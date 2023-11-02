declare global {
  interface Window {
    grecaptcha?: { execute: (siteKey: string, action: { action: string }) => Promise<string> };
    plausible: Plausible;
  }
}

type Plausible = (eventName: string, context?: { props?: unknown; callback?: () => void }) => void;

export {};
