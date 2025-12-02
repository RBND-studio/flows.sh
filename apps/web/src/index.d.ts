declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENV: string;
      NEXT_PUBLIC_DOMAIN?: string;
      NEXT_PUBLIC_FLOWS_ENVIRONMENT: string;
    }
  }
}

export {};
