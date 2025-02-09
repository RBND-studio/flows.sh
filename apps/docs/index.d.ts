declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_ENV: string;
      NEXT_PUBLIC_DOMAIN?: string;
      GH_ACCESS_TOKEN: string;
    }
  }
}

export {};
