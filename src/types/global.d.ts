declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
    ttq: {
      track: (event: string, properties?: Record<string, unknown>) => void;
      page: () => void;
    };
  }
}

export {};