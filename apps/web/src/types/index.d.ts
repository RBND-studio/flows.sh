declare global {
  interface Window {
    plausible: Plausible;
  }
}

type Plausible = (eventName: string, context?: { props?: unknown; callback?: () => void }) => void;

export {};
