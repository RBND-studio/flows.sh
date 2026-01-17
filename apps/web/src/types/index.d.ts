declare global {
  interface Window {
    // Can be undefined if the Plausible script hasn't loaded or is blocked
    plausible?: Plausible;
  }
}

type Plausible = (eventName: string, context?: { props?: unknown; callback?: () => void }) => void;

export {};
